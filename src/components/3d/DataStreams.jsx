import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * DataStreams:
 * The recurring visual motif: "IDEA ↓ CODE ↓ SYSTEM ↓ PRODUCT"
 * Flowing bezier curves through the 3D space with traveling light packets,
 * subtle Git-like branching pathways, and soft glowing nodes.
 */
export default function DataStreams({ scrollProgress = 0 }) {
  const pulsesGroupRef = useRef();

  // Create 3 organic data pathways threading down the world
  const pathways = useMemo(() => {
    // Stream 1: Core pipeline
    const curve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 2, 0),
      new THREE.Vector3(1.5, -3, 0.5),
      new THREE.Vector3(-1.2, -8, -0.5),
      new THREE.Vector3(1.8, -14, 0.8),
      new THREE.Vector3(-0.8, -20, -0.2),
      new THREE.Vector3(0, -28, 0)
    ]);

    // Stream 2: Git branch path (diverges, then reconverges)
    const curve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.8, 1, -1),
      new THREE.Vector3(-2.4, -4, 0.2),
      new THREE.Vector3(0.5, -10, 1.2),
      new THREE.Vector3(-1.5, -16, 0),
      new THREE.Vector3(1.2, -22, -0.5),
      new THREE.Vector3(0, -28, 0)
    ]);

    // Stream 3: API & packet pathway
    const curve3 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.8, 0, -0.5),
      new THREE.Vector3(0.8, -5, -1.2),
      new THREE.Vector3(2.2, -11, 0.2),
      new THREE.Vector3(-0.4, -17, -0.8),
      new THREE.Vector3(-1.4, -23, 0.4),
      new THREE.Vector3(0, -28, 0)
    ]);

    return [
      { curve: curve1, color: '#38bdf8', points: curve1.getPoints(120), geom: new THREE.BufferGeometry().setFromPoints(curve1.getPoints(120)) },
      { curve: curve2, color: '#a78bfa', points: curve2.getPoints(120), geom: new THREE.BufferGeometry().setFromPoints(curve2.getPoints(120)) },
      { curve: curve3, color: '#818cf8', points: curve3.getPoints(120), geom: new THREE.BufferGeometry().setFromPoints(curve3.getPoints(120)) }
    ];
  }, []);

  // Traveling data packet particles along the curves
  const packetCount = 9;
  const packets = useMemo(() => {
    return Array.from({ length: packetCount }, (_, i) => ({
      pathIndex: i % 3,
      offset: i / packetCount,
      speed: 0.045 + (i % 3) * 0.015,
      size: 0.06 + (i % 2) * 0.03,
      color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a78bfa' : '#60a5fa'
    }));
  }, [packetCount]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (pulsesGroupRef.current) {
      pulsesGroupRef.current.children.forEach((child, i) => {
        const pkt = packets[i];
        if (!pkt) return;
        const pathway = pathways[pkt.pathIndex];
        // Calculate loop position [0..1]
        const progress = (t * pkt.speed + pkt.offset) % 1;
        const point = pathway.curve.getPointAt(progress);
        child.position.copy(point);
      });
    }
  });

  return (
    <group>
      {/* Static Stream Pathway Lines */}
      {pathways.map((path, idx) => (
        <line key={`path-${idx}`} geometry={path.geom}>
          <lineBasicMaterial
            color={path.color}
            transparent
            opacity={0.16}
          />
        </line>
      ))}

      {/* Traveling Data Packets */}
      <group ref={pulsesGroupRef}>
        {packets.map((pkt, idx) => (
          <mesh key={`pkt-${idx}`}>
            <sphereGeometry args={[pkt.size, 12, 12]} />
            <meshBasicMaterial
              color={pkt.color}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
