import React, { useRef, Suspense, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import DeveloperCore from './DeveloperCore';
import EnvironmentParticles from './EnvironmentParticles';
import DataStreams from './DataStreams';
import ConvergenceField from './ConvergenceField';
import { scrollProgressRef } from '../../utils/useScrollProgress';
import { getPerformanceTier, visibilityManager } from '../../utils/performance';

/**
 * CameraRig:
 * Smoothly translates the camera through the continuous 3D world as the user scrolls:
 * AWAKEN (0.0) -> DISCOVER (0.2) -> BUILD (0.4) -> THINK (0.55) -> ARCHITECT (0.7) -> GROW (0.85) -> CONNECT (1.0)
 * Adds gentle pointer parallax without React re-renders.
 */
function CameraRig({ pointerRef, prefersReducedMotion }) {
  useFrame((state) => {
    if (!visibilityManager.isVisible) return;
    const scrollProgress = scrollProgressRef.current;
    const pointer = pointerRef.current;

    // Current target camera Y translates from 0 to -28.5 based on scroll
    const targetY = -scrollProgress * 28.5;
    
    // Smooth camera depth dynamics
    const targetZ = 13.5 - Math.sin(scrollProgress * Math.PI) * 1.5;

    // Pointer parallax response (subtle and restrained)
    const targetX = prefersReducedMotion ? 0 : pointer.x * 0.45;
    const targetLookAtY = targetY - (prefersReducedMotion ? 0 : pointer.y * 0.25);

    // Smooth lerp for buttery camera transition
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);

    state.camera.lookAt(0, targetLookAtY, 0);
  });

  return null;
}

export default function WorldCanvas() {
  const pointerRef = useRef({ x: 0, y: 0 });
  const [supportsWebGL, setSupportsWebGL] = useState(true);
  const perf = useMemo(() => getPerformanceTier(), []);

  // Check WebGL availability and track pointer via ref (zero React re-renders)
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setSupportsWebGL(false);
    } catch {
      setSupportsWebGL(false);
    }

    const handlePointerMove = (e) => {
      // Direct ref mutation avoiding any React reconciliation
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (!supportsWebGL) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-tech-grid opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-3/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 45, near: 0.1, far: 80 }}
        dpr={perf.dpr}
        gl={{
          antialias: perf.antialias,
          alpha: true,
          powerPreference: perf.isLowPower ? 'default' : 'high-performance'
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            console.warn('[WebGL] Context lost. Switching to ambient background fallback.');
            setSupportsWebGL(false);
          }, false);
        }}
      >
        <Suspense fallback={null}>
          <CameraRig pointerRef={pointerRef} prefersReducedMotion={perf.prefersReducedMotion} />

          {/* Ambient & Rim Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 7]} intensity={0.7} color="#a78bfa" />
          <directionalLight position={[-5, -10, -5]} intensity={0.4} color="#38bdf8" />

          {/* 3D Core Scene Elements */}
          <DeveloperCore pointerRef={pointerRef} prefersReducedMotion={perf.prefersReducedMotion} />
          <EnvironmentParticles pointerRef={pointerRef} particleTier={perf.particleTier} prefersReducedMotion={perf.prefersReducedMotion} />
          <DataStreams prefersReducedMotion={perf.prefersReducedMotion} />
          <ConvergenceField prefersReducedMotion={perf.prefersReducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
