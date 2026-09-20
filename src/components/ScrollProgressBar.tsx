import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#00C2FF] via-[#0B4ECF] to-[#1D4ED8] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(11,78,207,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
