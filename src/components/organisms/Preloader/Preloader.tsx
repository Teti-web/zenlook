'use client';

import AnimatedOLetter from './AnimatedOLetter/AnimatedOLetter';
import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [percentage, setPercentage] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const increment = 99 / (duration / 50);
    const timer = setInterval(() => {
      setPercentage((prev) => {
        const next = Math.min(prev + increment, 100);

        if (next >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onComplete?.(), 700);
        }

        return Math.round(next);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  const baseVisible = 2;
  const totalOs = 7;

  const visibleOs =
    percentage < 15
      ? baseVisible
      : Math.min(totalOs, baseVisible + Math.floor(((percentage - 15) / 83) * (totalOs - baseVisible)));

  const hasNewOs = visibleOs > baseVisible;

  // Responsive зсуви для mobile та desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const secondOShift = isMobile ? -20 : -40;
  const kShiftMultiplier = isMobile ? -20 : -40;
  const animatedOShiftBase = isMobile ? -30 : -80;
  const animatedOShiftStep = isMobile ? 25 : 50;

  const kShift = Math.max(0, visibleOs - baseVisible) * kShiftMultiplier;

  return (
    <section
      className={`bg-brand flex h-screen w-full flex-col items-start justify-end p-3.5 transition-opacity duration-500 md:p-6 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span className="text-link font-regular text-4xl italic md:text-[45px]">
        {percentage.toString().padStart(2, '0')}%
      </span>
      <p className="text-gradient-red flex w-dvw items-center text-[56px] leading-[268.15px] tracking-[-0.06em] uppercase transition-all duration-500 ease-out md:text-[233px]">
        <span>zenl</span>
        <span>o</span>
        <span
          className="text-gradient-red inline-block transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${hasNewOs ? secondOShift : 0}px)`,
          }}
        >
          o
        </span>
        {Array.from({ length: totalOs - baseVisible }).map((_, index) => {
          const realIndex = index + baseVisible;
          const isVisible = realIndex < visibleOs;
          const shift = animatedOShiftBase - index * animatedOShiftStep;
          return (
            <AnimatedOLetter
              key={realIndex}
              index={realIndex}
              isVisible={isVisible}
              shift={shift}
              isMobile={isMobile}
            />
          );
        })}
        <span
          className="text-gradient-red inline-block w-max transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${kShift}px)`,
            willChange: 'transform',
          }}
        >
          k
        </span>
      </p>
    </section>
  );
};

export default Preloader;
