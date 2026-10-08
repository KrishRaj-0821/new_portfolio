import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import DeveloperCore from './DeveloperCore';
import EnvironmentParticles from './EnvironmentParticles';
import DataStreams from './DataStreams';
import ConvergenceField from './ConvergenceField';

/**
 * CameraRig:
 * Smoothly translates the camera through the continuous 3D world as the user scrolls:
 * AWAKEN (0.0) -> DISCOVER (0.2) -> BUILD (0.4) -> THINK (0.55) -> ARCHITECT (0.7) -> GROW (0.85) -> CONNECT (1.0)
 * Adds gentle pointer parallax.
 */
function CameraRig({ scrollProgress, pointer }) {
  useFrame((state) => {
    // Current target camera Y translates from 0 to -28.5 based on scroll
    const targetY = -scrollProgress * 28.5;
    
    // Smooth camera depth dynamics
    const targetZ = 13.5 - Math.sin(scrollProgress * Math.PI) * 1.5;

    // Pointer parallax response (subtle and restrained)
    const targetX = pointer.x * 0.45;
    const targetLookAtY = targetY - pointer.y * 0.25;

    // Smooth lerp for buttery camera transition
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);

    state.camera.lookAt(0, targetLookAtY, 0);
  });

  return null;
}

export default function WorldCanvas({ scrollProgress = 0 }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  // Check WebGL availability and track pointer
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setSupportsWebGL(false);
    } catch {
      setSupportsWebGL(false);
    }

    const handlePointerMove = (e) => {
      // Normalized coordinates [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setPointer({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (!supportsWebGL) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 45, near: 0.1, far: 80 }}
        dpr={[1, typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.75) : 1]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <CameraRig scrollProgress={scrollProgress} pointer={pointer} />

          {/* Ambient & Rim Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 7]} intensity={0.7} color="#a78bfa" />
          <directionalLight position={[-5, -10, -5]} intensity={0.4} color="#38bdf8" />

          {/* 3D Core Scene Elements */}
          <DeveloperCore scrollProgress={scrollProgress} pointer={pointer} />
          <EnvironmentParticles scrollProgress={scrollProgress} pointer={pointer} />
          <DataStreams scrollProgress={scrollProgress} />
          <ConvergenceField scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
