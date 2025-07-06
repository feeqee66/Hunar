import React, { useEffect, useState } from 'react';

const SpiderWebStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create random star positions
    const newStars = Array.from({ length: 15 }).map(() => ({
      left: Math.random() * window.innerWidth,
      duration: 3 + Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.left}px`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default SpiderWebStars;