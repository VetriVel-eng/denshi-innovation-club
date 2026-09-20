import React, { useState, useEffect, useRef } from 'react';

export const HeroLogo3D: React.FC = () => {
  // Rotation state (in degrees)
  const [rotation, setRotation] = useState({ x: -4, y: 25 });
  const [isDragging, setIsDragging] = useState(false);

  // Drag physics tracking
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPointerRef = useRef({ x: 0, y: 0, time: 0 });
  const currentRotRef = useRef({ x: -4, y: 25 });
  const targetRotRef = useRef({ x: -4, y: 25 });
  const animFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth lerp & 360 auto-spin physics loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isDragging) {
        // Smooth continuous 360 degree ambient rotation
        targetRotRef.current.y += delta * 28; // ~28 deg/sec
        
        // Prevent huge number overflow while maintaining continuous angle
        if (targetRotRef.current.y > 360000) {
          targetRotRef.current.y -= 360000;
          currentRotRef.current.y -= 360000;
        }
      }

      // Smooth inertia when released after dragging
      if (!isDragging && (Math.abs(velocityRef.current.x) > 0.05 || Math.abs(velocityRef.current.y) > 0.05)) {
        targetRotRef.current.y += velocityRef.current.x * 0.9;
        targetRotRef.current.x -= velocityRef.current.y * 0.9;
        
        // Limit pitch so it doesn't completely flip inverted
        targetRotRef.current.x = Math.max(-65, Math.min(65, targetRotRef.current.x));

        // Apply friction decay
        velocityRef.current.x *= 0.93;
        velocityRef.current.y *= 0.93;
      }

      // Clamp target pitch within natural limits
      targetRotRef.current.x = Math.max(-65, Math.min(65, targetRotRef.current.x));

      // Buttery smooth spring lerp interpolation
      const lerpFactor = isDragging ? 0.25 : 0.09;
      currentRotRef.current.x += (targetRotRef.current.x - currentRotRef.current.x) * lerpFactor;
      currentRotRef.current.y += (targetRotRef.current.y - currentRotRef.current.y) * lerpFactor;

      setRotation({
        x: Math.round(currentRotRef.current.x * 10) / 10,
        y: Math.round(currentRotRef.current.y * 10) / 10,
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDragging]);

  // Pointer event handlers for desktop & mobile
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: targetRotRef.current.x,
      rotY: targetRotRef.current.y,
    };
    
    lastPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now(),
    };

    velocityRef.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    // Full 360 degree sensitivity
    targetRotRef.current.y = dragStartRef.current.rotY + deltaX * 0.8;
    targetRotRef.current.x = Math.max(-65, Math.min(65, dragStartRef.current.rotX - deltaY * 0.7));

    // Calculate momentum velocity
    const now = performance.now();
    const timeDelta = Math.max(1, now - lastPointerRef.current.time);
    const pxDeltaX = e.clientX - lastPointerRef.current.x;
    const pxDeltaY = e.clientY - lastPointerRef.current.y;

    velocityRef.current = {
      x: (pxDeltaX / timeDelta) * 14,
      y: (pxDeltaY / timeDelta) * 14,
    };

    lastPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: now,
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch {
        // ignore pointer capture release error
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center select-none bg-transparent py-2 sm:py-4">
      {/* 3D Stage Container */}
      <div
        ref={containerRef}
        id="hero-3d-spinning-logo"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing touch-none bg-transparent"
        style={{ perspective: 1400 }}
      >
        {/* Soft dynamic ambient contact shadow */}
        <div
          style={{
            transform: `scale(${1.1 + Math.sin((rotation.y * Math.PI) / 180) * 0.15})`,
            opacity: 0.18 + Math.cos((rotation.x * Math.PI) / 180) * 0.08,
          }}
          className="absolute bottom-2 w-4/5 h-10 bg-[#141413]/25 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
        />

        {/* 3D Rotating Transparent Emblem Object */}
        <div
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging ? 'none' : 'transform 0.04s ease-out',
          }}
          className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] flex items-center justify-center pointer-events-none bg-transparent"
        >
          {/* Subtle 3D volumetric extrusion core */}
          <div
            style={{
              transform: 'translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-4 rounded-full bg-transparent"
          />

          {/* FRONT FACE (+Z): Official Denshi Innovation Club Logo (Transparent) */}
          <div
            style={{
              transform: 'rotateY(0deg) translateZ(12px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 flex items-center justify-center bg-transparent drop-shadow-[0_20px_35px_rgba(11,78,207,0.18)] filter"
          >
            <img
              src="/logos/denshi-logo.svg"
              alt="Denshi Innovation Club Official Logo"
              className="w-full h-full object-contain pointer-events-none filter drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* BACK FACE (-Z): Skill Development Cell Logo (Transparent) */}
          <div
            style={{
              transform: 'rotateY(180deg) translateZ(12px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 flex items-center justify-center bg-transparent drop-shadow-[0_20px_35px_rgba(20,20,19,0.18)] filter"
          >
            <img
              src="/logos/sdc-logo.png"
              alt="Skill Development Cell SINCET Official Logo"
              className="w-[90%] h-[90%] object-contain pointer-events-none filter drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
