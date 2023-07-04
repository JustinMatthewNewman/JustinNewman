import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


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
      lineRefs.current.forEach((line) => {
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

  const lineThickness = 2; // Adjust the line thickness here

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
            float factor = (vUv.y + 1.0) / 2.0; // Adjust gradient direction
            gl_FragColor = vec4(mix(baseColor, gradient, factor), 1.0);
          }
        `,
        uniforms: {
          gradient: { value: gradient },
          baseColor: { value: baseColor },
        },
        linewidth: lineThickness, // Set the line thickness
      }),
    []
  );

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
  return (
    <div>
      <Head>
        <title>Justin Newman</title>
        <meta name="description" content="I’m a human." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <WavyLines />
      </Canvas>
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <About />
        <div style={{padding: "50px 0"}}></div> {/* Here's the padding */}
        <Projects />
        {/* <Skills /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
};

export default Home;

