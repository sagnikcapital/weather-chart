import  { useState, useEffect } from 'react';
import './Compass.css';

const Compass = () => {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleOrientation = (event) => {
      const compassHeading = event.alpha; // This is a simplification; a complete solution would need more calculations for different devices
      setDirection(compassHeading);
    };
    window.addEventListener('deviceorientation', handleOrientation);
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className="compass-container">
      <div className="compass">
        <div className="needle" style={{ transform: `rotate(${direction}deg)` }}></div>
      </div>
    </div>
  );
};

export default Compass;