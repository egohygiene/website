import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const colors = [
  '#ff6b6b', '#6bfaff', '#ffef6b', '#6bff7a', '#b66bff', '#ff8e6b',
  '#6b91ff', '#ff6bb9', '#6bffde', '#ffd56b', '#9dff6b', '#6bffb9'
];

export default function Planet({ pillar, index, total }) {
  const group = useRef();
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({ scale: hovered ? 1.2 : 1 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = (index / total) * Math.PI * 2 + t * 0.1;
    const radius = 5;
    group.current.position.x = Math.cos(angle) * radius;
    group.current.position.z = Math.sin(angle) * radius;
    mesh.current.rotation.y += 0.01;
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
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={colors[index % colors.length]} />
      </animated.mesh>
      <Text position={[0, 0.8, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        {pillar.title}
      </Text>
    </group>
  );
}
