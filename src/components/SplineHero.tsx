
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
      
      {/* Fallback gradient background instead of Spline */}
      <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40 animate-gradient-x"></div>
      
      {/* Animated stars for visual interest */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
    </div>
  );
};

export default SplineHero;
