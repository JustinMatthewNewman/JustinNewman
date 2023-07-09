import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';

const WavyLines = () => {
  const { theme, toggleTheme } = useTheme();
  const lineRefs = useRef([]);
  const shaderMaterialRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

  const addRef = (el) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  useFrame(() => {
    if (lineRefs.current.length > 0) {
      const newRotation = THREE.MathUtils.lerp(lineRefs.current[0].rotation.z, targetRotation, 0.1);
      lineRefs.current.forEach((line) => {
        line.rotation.z = newRotation;
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

  useEffect(() => {
    setTargetRotation(scrollY * 0.001);
  }, [scrollY]);

  useEffect(() => {
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.baseColor.value = new THREE.Color(theme.line_baseColor || 0xecc7fc);
      shaderMaterialRef.current.uniforms.gradient.value = new THREE.Color(theme.line_gradColor || "lightblue");
    }
  }, [theme]);

  const lineThickness = 2;

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: `
        varying vec3 vUv;

        void main() {
          vUv = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
        fragmentShader: `
          uniform vec3 gradient;
          uniform vec3 baseColor;
          varying vec3 vUv;

          void main() {
            float factor = (vUv.y + 1.0) / 2.0;
            gl_FragColor = vec4(mix(baseColor, gradient, factor), 1.0);
          }
        `,
        uniforms: {
          gradient: { value: new THREE.Color(theme.line_gradColor || "lightblue") },
          baseColor: { value: new THREE.Color(theme.line_baseColor || 0xecc7fc) },
        },
        linewidth: lineThickness,
      }),
    []
  );
  shaderMaterialRef.current = shaderMaterial;

  const lines = useMemo(
    () =>
      new Array(6).fill().map((_, i) => {
        const geometry = new THREE.BufferGeometry();
        const points = [];
        for (let i = 0; i < 200; i++) {
          const x = i / 10;
          const y = Math.sin(i / 25);
          points.push(new THREE.Vector3(x - 10, y - 1, 0));
        }
        geometry.setFromPoints(points);
        geometry.rotateZ(0.4);
        return (
          <line ref={addRef} key={i} position-x={i * 1.25}>
            <shaderMaterial attach="material" args={[shaderMaterial]} />
            <primitive object={geometry} attach="geometry" />
          </line>
        );
      }),
    [shaderMaterial]
  );

  return lines;
};

const Home = () => {
  const About = dynamic(() => import('../components/About'))
  const Contact = dynamic(() => import('../components/Contact'));
  const Main = dynamic(() => import('../components/Main'));
  const Projects = dynamic(() => import('../components/Projects'));
  const Skills = dynamic(() => import('../components/Skills'));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr', overflowX: 'hidden'}}>
      <Head>
        <title>Justin Newman</title>
        <meta name="description" content="I’m a human." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <WavyLines />
      </Canvas>
      <div style={{ overflow: 'auto', display: 'grid', gridTemplateRows: 'auto', rowGap: '50px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
