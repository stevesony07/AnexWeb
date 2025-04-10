
import { useState } from 'react';

const SplineBackground = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="w-full h-screen fixed top-0 left-0 -z-20 overflow-hidden">
      {!loaded && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {/* Fallback gradient background with animated effect */}
      <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black relative">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 animate-gradient-x"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(to right, #666 1px, transparent 1px), linear-gradient(to bottom, #666 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-background"></div>
    </div>
  );
};

export default SplineBackground;
