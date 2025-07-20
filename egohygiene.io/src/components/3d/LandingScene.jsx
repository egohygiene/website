import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { animated } from '@react-spring/three';
import pillars from '../../../../src/data/pillars.json';
import EgoCore from './EgoCore.jsx';
import Planet from './Planet.jsx';
import HUDOverlay from './HUDOverlay.jsx';
import BackgroundAudio from './BackgroundAudio.jsx';

export default function LandingScene() {
  return (
    <div className="w-screen h-screen relative">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={[ '#050505' ]} />
        <ambientLight intensity={0.5} />
        <Stars />
        <Suspense fallback={null}>
          <EgoCore />
          {pillars.map((pillar, i) => (
            <Planet key={pillar.slug} pillar={pillar} index={i} total={pillars.length} />
          ))}
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
      <HUDOverlay pillars={pillars} />
      <BackgroundAudio />
    </div>
  );
}
