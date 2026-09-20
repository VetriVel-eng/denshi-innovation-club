import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [isActive, setIsActive] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFinish = useCallback(() => {
    setIsActive(false);

    try {
      sessionStorage.setItem('denshi_intro_seen', 'true');
    } catch {
      // ignore
    }

    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => {
      console.log('Video autoplay was blocked.');
    });

    const handleVideoEnd = () => {
      // Video முடிந்த உடனே உடனே வெப்சைட்டிற்கு மாறிரும்
      handleFinish();
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-black overflow-hidden"
        >
          {/* ENTRY VIDEO */}
          <video
            ref={videoRef}
            src="/logo-video.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};