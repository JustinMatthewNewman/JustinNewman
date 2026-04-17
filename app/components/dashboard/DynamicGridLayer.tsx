import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

const GRID_SIZE = 24;

const MAX_ANIMATIONS = 4;
const SPAWN_INTERVAL_MS = 1800;
const ANIMATION_LIFESPAN_MS = 4500;

interface GridBounds {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  height: number;
}

const getGridPositions = (width: number, height: number): GridBounds => {
  if (!width || !height) {
    return { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
  }

  const maxX = Math.floor(width / GRID_SIZE) - 1;
  const maxY = Math.floor(height / GRID_SIZE) - 1;

  const gx1 = Math.floor(Math.random() * maxX);
  const gy1 = Math.floor(Math.random() * maxY);

  const isHorizontal = Math.random() > 0.5;
  const gx2 = isHorizontal ? gx1 + 1 : gx1;
  const gy2 = isHorizontal ? gy1 : gy1 + 1;

  return {
    x1: gx1 * GRID_SIZE,
    y1: gy1 * GRID_SIZE,
    x2: gx2 * GRID_SIZE,
    y2: gy2 * GRID_SIZE,
    width: GRID_SIZE,
    height: GRID_SIZE,
  };
};

/* ---------- Blob Shape ---------- */

const generateBlobPath = (width: number, height: number) => {
  const cx = width / 2;
  const cy = height / 2;

  const rx = width / 2.2;
  const ry = height / 2.8;

  const points = 12;
  const step = (Math.PI * 2) / points;

  let d = '';

  for (let i = 0; i < points; i++) {
    const angle = i * step;
    const variance = 0.25;
    const rand = 1 + (Math.random() - 0.5) * variance;

    const x = cx + Math.cos(angle) * rx * rand;
    const y = cy + Math.sin(angle) * ry * rand;

    if (i === 0) d += `M ${x} ${y}`;
    else d += ` Q ${x} ${y}, ${x} ${y}`;
  }

  return d + ' Z';
};

/* ---------- Box ---------- */

const ConnectingBox = ({ id, bounds }: any) => {
  return (
    <motion.g
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Line */}
      <motion.line
        x1={bounds.x1}
        y1={bounds.y1}
        x2={bounds.x1}
        y2={bounds.y1}
        animate={{ x2: bounds.x2, y2: bounds.y2 }}
        transition={{ duration: 0.6 }}
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* Box */}
      <motion.rect
        x={bounds.x1}
        y={bounds.y1}
        width={bounds.width}
        height={0}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.7, height: GRID_SIZE }}
        transition={{ delay: 0.6, duration: 0.4 }}
        fill="rgba(59,130,246,0.15)"
        stroke="#3b82f6"
      />

      {/* Checkmark */}
      <motion.path
        d={`M${bounds.x1 + 6} ${bounds.y1 + 12} L${bounds.x1 + 10} ${bounds.y1 + 16} L${bounds.x1 + 18} ${bounds.y1 + 8}`}
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      />
    </motion.g>
  );
};

/* ---------- Main ---------- */

const DynamicGridLayer = () => {
  const [ref, bounds] = useMeasure();
  const [animations, setAnimations] = useState<any[]>([]);
  const [blobPath, setBlobPath] = useState('');

  /* Spawn animations */
  useEffect(() => {
    if (!bounds.width) return;

    const interval = setInterval(() => {
      setAnimations((prev) => {
        if (prev.length >= MAX_ANIMATIONS) return prev;

        const id = Date.now();
        const pos = getGridPositions(bounds.width, bounds.height);

        setTimeout(() => {
          setAnimations((cur) => cur.filter((a) => a.id !== id));
        }, ANIMATION_LIFESPAN_MS);

        return [...prev, { id, bounds: pos }];
      });
    }, SPAWN_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [bounds]);

  /* Blob animation */
  useEffect(() => {
    if (!bounds.width) return;

    const update = () =>
      setBlobPath(generateBlobPath(bounds.width, bounds.height));

    update();
    const interval = setInterval(update, 4000);

    return () => clearInterval(interval);
  }, [bounds]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          {/* Glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Blob Clip */}
          <clipPath id="blobClip">
            <motion.path
              d={blobPath}
              animate={{ d: blobPath }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </clipPath>
        </defs>

        {/* ✅ CLIPPED BACKGROUND ONLY */}
        <g clipPath="url(#blobClip)">
          <foreignObject width="100%" height="100%">
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(white 1px, transparent 1px)',
                  WebkitMaskSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
                  WebkitMaskRepeat: 'repeat',
                  background: `
                    linear-gradient(
                      to bottom,
                      #3b82f6,
                      #60a5fa,
                      #22d3ee,
                      #60a5fa,
                      #3b82f6
                    )
                  `,
                  opacity: 0.5,
                }}
              />
            </div>
          </foreignObject>
        </g>

        {/* 🚀 UNCLIPPED ANIMATIONS */}
        <g filter="url(#glow)">
          <AnimatePresence>
            {animations.map((a) => (
              <ConnectingBox key={a.id} {...a} />
            ))}
          </AnimatePresence>
        </g>
      </svg>
    </div>
  );
};

export default DynamicGridLayer;