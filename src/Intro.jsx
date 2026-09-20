import { useEffect, useRef } from "react";

export default function Intro({ onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => {
      // Browser autoplay restriction
    });

    video.onended = () => {
      onFinish();
    };

    return () => {
      video.onended = null;
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        ref={videoRef}
        src="/logo-video.mp4"
        autoPlay
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}