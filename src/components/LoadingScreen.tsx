
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [percentage, setPercentage] = useState(0);
  const [showBite, setShowBite] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const biteTimer = setTimeout(() => {
      setShowBite(true);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(biteTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-woodland via-kelp to-woodland flex flex-col items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-2">
            {/* Box Icon */}
            <div className="w-16 h-16 rounded-lg flex items-center justify-center animate-bounce">
              <img
                src="/images/sumnnn.png" // or .svg if it's an SVG
                alt="dabite Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* da text */}
            <div className="text-6xl font-display font-bold text-confetti animate-slide-in-left">
              da
            </div>
            
            {/* Bite text - appears with delay */}
            <div className={`text-6xl font-display font-bold text-stark-white transition-all duration-40 ${
              showBite ? 'animate-slide-in-right opacity-100' : 'opacity-0'
            }`}>
              bite
            </div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="w-full bg-stark-white/20 rounded-full h-3">
            <div 
              className="bg-confetti h-3 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          {/* Percentage */}
          <div className="text-stark-white text-xl font-semibold">
            {percentage}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-stark-white/80 text-lg animate-pulse">
          Preparing your homestyle meals...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
