import React from 'react';

export default function HUDOverlay({ pillars }) {
  return (
    <>
      <div className="absolute top-4 left-4 text-white text-lg font-semibold">
        Ego Hygiene
      </div>
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-300">
        Map your mind. Maintain the self. Expand with rhythm.
      </div>
    </>
  );
}
