
import { useEffect, useState } from 'react';

const SplineHero = () => {
  const [loaded, setLoaded] = useState(false);

  // Use useEffect to simulate loading (since we're using a fallback)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {!loaded && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {/* AI-themed animated background as fallback */}
      <div className="h-screen w-full relative">
        {/* Digital neural network effect */}
        <div className="absolute inset-0">
          {/* Nodes */}
          {[...Array(30)].map((_, i) => (
            <div 
              key={`node-${i}`}
              className="absolute rounded-full bg-blue-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                opacity: Math.random() * 0.6 + 0.2,
                filter: 'blur(1px)',
                animation: `pulse ${Math.random() * 4 + 2}s infinite alternate ease-in-out`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" 
               style={{ opacity: 0.2 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            
            {/* Randomly generate some connection lines */}
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              
              return (
                <line 
                  key={`line-${i}`}
                  x1={`${x1}%`} 
                  y1={`${y1}%`} 
                  x2={`${x2}%`} 
                  y2={`${y2}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  style={{
                    animation: `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Digital data stream effect */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-screen-xl h-full">
            {/* Binary data streams (vertical falling text effect) */}
            {[...Array(10)].map((_, i) => (
              <div 
                key={`stream-${i}`}
                className="absolute top-0 text-blue-500/20 font-mono text-xs whitespace-nowrap"
                style={{
                  left: `${i * 10 + Math.random() * 5}%`,
                  animation: `fadeIn ${Math.random() * 3 + 2}s infinite linear`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: 'translateY(-100%)'
                }}
              >
                {/* Generate random binary/hex string */}
                {[...Array(30)].map(() => 
                  Math.random() > 0.5 ? 
                  Math.round(Math.random()).toString() : 
                  Math.floor(Math.random() * 16).toString(16)
                ).join('')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplineHero;
