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
  const kShift = Math.max(0, visibleOs - baseVisible) * -40;

  return (
    <section
      className={`w-full h-screen bg-brand flex flex-col items-start justify-end p-3.5 md:p-6 transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span className="italic text-4xl md:text-[45px] text-link font-regular">
        {percentage.toString().padStart(2, '0')}%
      </span>
      <p className="uppercase flex items-center text-gradient-red text-[163px] md:text-[233px] leading-[268.15px] tracking-[-0.06em] w-dvw transition-all duration-500 ease-out">
        <span>zenl</span>
        <span>o</span>
        <span
          className="inline-block transition-transform duration-500 ease-out text-gradient-red"
          style={{
            transform: `translateX(${hasNewOs ? -40 : 0}px)`,
          }}
        >
          o
        </span>
        {Array.from({ length: totalOs - baseVisible }).map((_, index) => {
          const realIndex = index + baseVisible;
          const isVisible = realIndex < visibleOs;
          const shift = -80 - index * 50;
          return <AnimatedOLetter key={realIndex} index={realIndex} isVisible={isVisible} shift={shift} />;
        })}
        <span
          className="inline-block transition-transform duration-500 ease-out text-gradient-red w-max"
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
