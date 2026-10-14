import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollProgressRef } from '../../utils/useScrollProgress';
import { visibilityManager } from '../../utils/performance';

/**
 * ConvergenceField:
 * Renders the terminal convergence visual at the bottom of the world.
 * Radiating radial lines and concentric orbital rings that converge
 * on the central communication beacon where connection.request() lives.
 */
export default function ConvergenceField({ prefersReducedMotion = false }) {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  // 12 radial convergence lines pointing into the center point [0, -28.5, 0]
  const radialLines = useMemo(() => {
    const lines = [];
    const radius = 6;
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const geom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, -28.5 + (Math.sin(i) * 0.8), z),
        new THREE.Vector3(0, -28.5, 0)
      ]);
      lines.push(geom);
    }
    return lines;
  }, []);

  useFrame((state) => {
    if (!visibilityManager.isVisible) return;
    const progress = scrollProgressRef.current;

    if (groupRef.current) {
      // Fade in and become prominent as user approaches the bottom (scrollProgress > 0.78)
      const isVisible = progress > 0.76;
      groupRef.current.visible = isVisible;
      if (!isVisible || prefersReducedMotion) return; // skip updating rings if not visible or reduced motion
    }

    if (prefersReducedMotion) return;

    const t = state.clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Radiating Convergence Node */}
      <mesh position={[0, -28.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Halo Pulsing Rings */}
      <mesh ref={ring1Ref} position={[0, -28.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 0.55, 32]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={ring2Ref} position={[0, -28.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.25, 48]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Radial Lines drawing inward */}
      {radialLines.map((geom, idx) => (
        <line key={`rad-${idx}`} geometry={geom}>
          <lineBasicMaterial
            color={idx % 2 === 0 ? '#38bdf8' : '#818cf8'}
            transparent
            opacity={0.2}
          />
        </line>
      ))}
    </group>
  );
}
