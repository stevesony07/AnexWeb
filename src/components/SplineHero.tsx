
import { useState } from 'react';

const SplineHero = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10 overflow-hidden">
      {!loaded && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {/* Professional AI-themed visual effect */}
      <div className="w-full h-full bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-purple-950/30 animate-gradient-x"></div>
      
      {/* Digital nodes network effect */}
      <div className="absolute inset-0 overflow-hidden opacity-80">
        {[...Array(70)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.7 + 0.1,
              animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
            }}
          />
        ))}
        
        {/* Digital connection lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: '1px',
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>
      
      {/* Content overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
    </div>
  );
};

export default SplineHero;
