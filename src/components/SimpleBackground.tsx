
import React from 'react';

const SimpleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>
      
      {/* Subtle radial dots */}
      <div className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}>
      </div>
    </div>
  );
};

export default SimpleBackground;
