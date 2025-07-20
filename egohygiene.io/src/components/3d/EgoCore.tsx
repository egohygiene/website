import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export default function EgoCore() {
  const mesh: React.RefObject<any> = useRef();
  const { scale } = useSpring({
    from: { scale: 1 },
    to: { scale: 1.1 },
    loop: { reverse: true },
    config: { duration: 2000 }
  });

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.005;
  });

  return (
    <animated.mesh ref={mesh} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial emissive="#ff66ff" color="#ffffff" emissiveIntensity={1} />
    </animated.mesh>
  );
}
