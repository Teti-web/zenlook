'use client';

import AnimatedOLetter from './AnimatedOLetter/AnimatedOLetter';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const secondOShift = isMobile ? -20 : -50;
  const kShiftMultiplier = isMobile ? -20 : -40;
  const animatedOShiftBase = isMobile ? -30 : -120;
  const animatedOShiftStep = isMobile ? 25 : 50;

  const kShift = Math.max(0, visibleOs - baseVisible) * kShiftMultiplier;

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isComplete ? '-100%' : 0, 
        opacity: isComplete ? 0 : 1 
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="bg-brand flex h-screen w-full flex-col items-start justify-end p-3.5 md:p-6 relative"
    >
      <motion.span 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isComplete ? '-50px' : 0, 
          opacity: isComplete ? 0 : 1 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: isComplete ? 0.1 : 0
        }}
        className="text-link font-regular text-4xl italic md:text-[45px]"
      >
        {percentage.toString().padStart(2, '0')}%
      </motion.span>
      <motion.p 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isComplete ? '-30px' : 0, 
          opacity: isComplete ? 0 : 1 
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: isComplete ? 0.05 : 0
        }}
        className="text-gradient-red flex w-dvw items-center text-[56px] leading-[268.15px] tracking-[-0.06em] uppercase transition-all duration-500 ease-out md:text-[233px]"
      >
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
      </motion.p>
    </motion.section>
  );
};

export default Preloader;
