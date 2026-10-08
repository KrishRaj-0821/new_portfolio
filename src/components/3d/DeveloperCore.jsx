import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * DeveloperCore:
 * The abstract central engineering core representing Krish's systems mindset.
 * Features an inner crystalline geometry, 3 orthogonal gyro rings,
 * floating system satellites (Terminal, API, DB, Git, Algorithms, AI),
 * and subtle pulse animations.
 */
export default function DeveloperCore({ scrollProgress = 0, pointer = { x: 0, y: 0 } }) {
  const groupRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const satellitesRef = useRef([]);

  // 6 symbolic nodes around the core
  const nodes = useMemo(() => [
    { label: 'TERMINAL', pos: [1.8, 0.4, 0.5], color: '#a78bfa' },
    { label: 'API', pos: [-1.7, 0.8, -0.4], color: '#38bdf8' },
    { label: 'DATABASE', pos: [0.6, -1.6, 0.8], color: '#818cf8' },
    { label: 'GIT', pos: [-0.9, -1.4, -0.8], color: '#f59e0b' },
    { label: 'ALGORITHMS', pos: [0.4, 1.7, -0.6], color: '#10b981' },
    { label: 'AI/SYSTEM', pos: [-1.4, -0.2, 1.2], color: '#c084fc' }
  ], []);

  // Pre-calculate line connections from center to nodes
  const lineGeometries = useMemo(() => {
    return nodes.map(node => {
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...node.pos)
      ];
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, [nodes]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating and pointer response
      const targetY = (1 - Math.min(scrollProgress * 2.5, 1.5)) * 0.8;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY + Math.sin(t * 0.8) * 0.12, 0.05);
      
      // Pointer parallax rotation
      const targetRotX = pointer.y * 0.25;
      const targetRotY = pointer.x * 0.35 + t * 0.05;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.04);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.04);

      // Subtle scale dissipation as user scrolls far down into other sections
      const scaleFactor = Math.max(0.4, 1 - scrollProgress * 0.9);
      groupRef.current.scale.setScalar(scaleFactor);
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.2;
      innerRef.current.rotation.z = t * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.1;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.35;
      ring2Ref.current.rotation.z = t * 0.2;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.3;
      ring3Ref.current.rotation.x = t * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* Central Icosahedron Wireframe */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh>
        <octahedronGeometry args={[0.45, 0]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Orbiting Gyro Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.3, 0.012, 12, 64]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbiting Gyro Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.5, 0.01, 12, 64]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbiting Gyro Ring 3 */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1.7, 0.008, 12, 64]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Connecting Lines to Symbolic System Nodes */}
      {lineGeometries.map((geom, idx) => (
        <line key={`line-${idx}`} geometry={geom}>
          <lineBasicMaterial
            color={nodes[idx].color}
            transparent
            opacity={0.25}
          />
        </line>
      ))}

      {/* Floating System Nodes */}
      {nodes.map((node, idx) => (
        <group key={`node-${idx}`} position={node.pos}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color={node.color} />
          </mesh>
          {/* Subtle halo ring */}
          <mesh>
            <ringGeometry args={[0.1, 0.12, 24]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
