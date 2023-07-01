import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const baseColor = new THREE.Color(0xecc7fc);
const gradient = new THREE.Color("lightblue");

const WavyLines = () => {
  const lineRefs = useRef([]);
  const [scrollY, setScrollY] = useState(0);

  const addRef = (el) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  useFrame(() => {
    if (lineRefs.current.length > 0) {
      lineRefs.current.forEach(line => {
        line.rotation.z = scrollY * 0.001;
      });
    }
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vUv;

      void main() {
        vUv = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 gradient;
      uniform vec3 baseColor;
      varying vec3 vUv;

      void main() {
        float factor = (vUv.y + 1.0) / 2.0; // Adjust gradient direction
        gl_FragColor = vec4(mix(baseColor, gradient, factor), 1.0);
      }
    `,
    uniforms: {
      gradient: { value: gradient },
      baseColor: { value: baseColor }
    },
  }), []);

  const lines = useMemo(() => new Array(6).fill().map((_, i) => {
    const geometry = new THREE.BufferGeometry();
    const points = [];
    for (let i = 0; i < 200; i++) {
      const x = i / 10;
      const y = Math.sin(i / 25);
      points.push(new THREE.Vector3(x-10, y-1, 0));
    }
    geometry.setFromPoints(points);
    geometry.rotateZ(0.4)
    return (
      <line ref={addRef} key={i} position-x={i * 2}>
        <shaderMaterial attach="material" args={[shaderMaterial]} />
        <primitive object={geometry} attach="geometry" />
      </line>
    );
  }), [shaderMaterial]);

  return lines;
};

const FloatingText = React.memo(() => {
  const [hovered, setHovered] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${hovered ? 1.2 : 1})`,
    transition: 'transform 0.3s',
    fontSize: '2em',
    cursor: 'pointer',
    zIndex: 3
  };

  return (
    <div
      style={style}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      Hi, I'm Justin.
    </div>
  );
});


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <FloatingText/>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <WavyLines />
      </Canvas>
    </div>
  );
};

export default Main;
