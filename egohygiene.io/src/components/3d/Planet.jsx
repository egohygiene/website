import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Text, Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const colors = [
  '#ff6b6b', '#6bfaff', '#ffef6b', '#6bff7a', '#b66bff', '#ff8e6b',
  '#6b91ff', '#ff6bb9', '#6bffde', '#ffd56b', '#9dff6b', '#6bffb9'
];

export default function Planet({ pillar, index, total }) {
  const group = useRef();
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({ scale: hovered ? 1.5 : 1 });
  const { emissiveIntensity } = useSpring({
    emissiveIntensity: hovered ? 0.8 : 0.2,
    config: { mass: 1, tension: 200, friction: 20 }
  });

  // Load texture based on slug
  const texture = useLoader(TextureLoader, `/assets/textures/planets/${pillar.slug}.jpg`);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = (index / total) * Math.PI * 2 + t * 0.05;
    const radius = 7;
    const floatY = Math.sin(t + index) * 0.3;
    group.current.position.set(
      Math.cos(angle) * radius,
      floatY,
      Math.sin(angle) * radius
    );
    mesh.current.rotation.y += 0.002;
  });

  return (
    <group ref={group}>
      <animated.mesh
        ref={mesh}
        scale={scale}
        onClick={() => (window.location.href = `/pillars/${pillar.slug}`)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.6, 64, 64]} />
        <animated.meshStandardMaterial
          map={texture}
          color={colors[index % colors.length]}
          emissive={colors[index % colors.length]}
          emissiveIntensity={emissiveIntensity}
          roughness={0.2}
          metalness={0.4}
        />
      </animated.mesh>

      {/* Pillar Label Text */}
      <Text
        position={[0, -1, 0]}
        fontSize={0.28}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.005}
        outlineColor="#ffffff88"
      >
        {pillar.title}
      </Text>

      {/* Tooltip */}
      {hovered && (
        <Html position={[0, 1, 0]}>
          <div className="text-xs px-2 py-1 rounded bg-white/10 text-white backdrop-blur shadow-lg border border-white/20">
            Click to explore
          </div>
        </Html>
      )}
    </group>
  );
}
