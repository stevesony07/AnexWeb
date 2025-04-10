
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
      
      {/* Professional AI-themed background */}
      <div className="w-full h-full bg-gradient-to-b from-gray-950 to-black relative">
        {/* Digital circuit lines effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-indigo-950/10 animate-gradient-x"></div>
        
        {/* Digital grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(to right, #4A5568 1px, transparent 1px), linear-gradient(to bottom, #4A5568 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                opacity: Math.random() * 0.4 + 0.1,
                filter: 'blur(1px)',
                animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Overlay gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background"></div>
    </div>
  );
};

export default SplineBackground;
