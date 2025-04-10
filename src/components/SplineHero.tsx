
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Set a timeout to show loading animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleError = () => {
    console.error("Failed to load Spline scene");
    setError(true);
    setLoaded(true); // Stop showing loading indicator
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10 overflow-hidden">
      {!loaded && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {!error ? (
        <Spline 
          scene="https://prod.spline.design/oFAR-DwGvbjbALGc/scene.splinecode" 
          className={`w-full h-full ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
    </div>
  );
};

export default SplineHero;
