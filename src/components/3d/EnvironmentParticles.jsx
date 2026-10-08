import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * EnvironmentParticles:
 * Implements the 3-layer visual depth required by the design system:
 * - Distant subtle grid plane & atmospheric particles (Background)
 * - Flowing data points & floating system nodes (Midground)
 * - Floating technical geometric tokens (Foreground)
 */
export default function EnvironmentParticles({ scrollProgress = 0, pointer = { x: 0, y: 0 } }) {
  const bgPointsRef = useRef();
  const midPointsRef = useRef();
  const tokensGroupRef = useRef();

  // Background particle cloud (subtle, slow drift)
  const bgCount = 450;
  const [bgPositions, bgColors] = useMemo(() => {
    const pos = new Float32Array(bgCount * 3);
    const col = new Float32Array(bgCount * 3);
    const colorPalette = [
      new THREE.Color('#475569'), // slate
      new THREE.Color('#6366f1'), // indigo
      new THREE.Color('#38bdf8'), // cyan
      new THREE.Color('#a855f7'), // purple
    ];

    for (let i = 0; i < bgCount; i++) {
      // Disperse widely across scroll journey height (-35 to 15)
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45 - 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [bgCount]);

  // Midground data particles (higher density along scroll pathway)
  const midCount = 200;
  const [midPositions] = useMemo(() => {
    const pos = new Float32Array(midCount * 3);
    for (let i = 0; i < midCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40 - 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 + 1;
    }
    return [pos];
  }, [midCount]);

  // Micro technical tokens (geometric crosses, nodes)
  const technicalTokens = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 36 - 10,
        (Math.random() - 0.5) * 6 + 2
      ],
      speed: 0.2 + Math.random() * 0.4,
      rotSpeed: 0.1 + Math.random() * 0.3,
      size: 0.08 + Math.random() * 0.08,
      type: i % 3 === 0 ? 'box' : i % 3 === 1 ? 'tetra' : 'ring'
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (bgPointsRef.current) {
      bgPointsRef.current.rotation.y = t * 0.015 + pointer.x * 0.05;
      bgPointsRef.current.rotation.x = pointer.y * 0.05;
    }

    if (midPointsRef.current) {
      midPointsRef.current.rotation.y = -t * 0.025 + pointer.x * 0.08;
      midPointsRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    }

    if (tokensGroupRef.current) {
      tokensGroupRef.current.children.forEach((child, i) => {
        const token = technicalTokens[i];
        if (token) {
          child.rotation.x = t * token.rotSpeed;
          child.rotation.y = t * token.rotSpeed * 0.8;
          child.position.y += Math.sin(t * token.speed + i) * 0.002;
        }
      });
    }
  });

  return (
    <group>
      {/* Background Particle Cloud */}
      <points ref={bgPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={bgCount}
            array={bgPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={bgCount}
            array={bgColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>

      {/* Midground Active Data Stream Points */}
      <points ref={midPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={midCount}
            array={midPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#38bdf8"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Foreground Abstract Computational Tokens */}
      <group ref={tokensGroupRef}>
        {technicalTokens.map((token, i) => (
          <mesh key={i} position={token.pos}>
            {token.type === 'box' && <boxGeometry args={[token.size, token.size, token.size]} />}
            {token.type === 'tetra' && <tetrahedronGeometry args={[token.size, 0]} />}
            {token.type === 'ring' && <torusGeometry args={[token.size, 0.015, 8, 16]} />}
            <meshBasicMaterial
              color={i % 2 === 0 ? '#a78bfa' : '#38bdf8'}
              wireframe
              transparent
              opacity={0.28}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
