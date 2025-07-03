import React, { useEffect, useRef } from 'react';
import bgMusic from '../assets/sound/bg.mp3';

const Audio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    // Try autoplay silently (may still get blocked)
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(() => {
      // If blocked, wait for user click
      window.addEventListener('click', handleFirstInteraction);
    });
  }, []);

  return (
    <audio ref={audioRef} src={bgMusic} loop />
  );
};

export default Audio;


