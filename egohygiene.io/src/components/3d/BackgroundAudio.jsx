import React from 'react';

export default function BackgroundAudio() {
  return (
    <audio src="/audio/ambient.mp3" autoPlay loop style={{ display: 'none' }} />
  );
}
