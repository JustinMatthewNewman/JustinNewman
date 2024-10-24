"use client";
import { StrictMode, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { BufferGeometry } from 'three';

const GraphHero = () => {
  const meshRef = useRef<THREE.Mesh>(null); // Create a ref for the mesh
  const stlPath = './data/render.stl'; // Path to your STL file
  const geometry = useLoader(STLLoader, stlPath) as BufferGeometry; // Assert the type to BufferGeometry

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the mesh slowly around the Y-axis
      meshRef.current.rotation.y += 0.001; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial wireframe color="#72798c" />
    </mesh>
  );
};

const App = () => {
  return (
    <StrictMode>
      <Canvas 
        camera={{ position: [440, 240, 240], fov: 28 }} 
        style={{ 
          position: 'absolute', 
          top: '210px',
          left: '-250px',
          width: '100%', 
          height: '50rem', 
          zIndex: 1 
        }} 
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[30, 10, 10]} />
        <GraphHero />
      </Canvas>
    </StrictMode>
  );
};

export default App;