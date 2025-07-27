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
  const totalOs = 11;

  const phase1End = 30;
  const isAccumulationPhase = percentage <= phase1End;

  const visibleOs = Math.min(totalOs, baseVisible + Math.floor((percentage / 80) * (totalOs - baseVisible)));
  const hasNewOs = visibleOs > baseVisible;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const kShiftMultiplier = isMobile ? 35 : 40;

  const animatedOShiftBase = isAccumulationPhase ? 0 : isMobile ? 30 : 100;
  const animatedOShiftStep = isAccumulationPhase ? 0 : isMobile ? 30 : 60;

  const kShift = Math.max(0, visibleOs - baseVisible) * (isAccumulationPhase ? 0 : kShiftMultiplier);

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isComplete ? '-100%' : 0,
        opacity: isComplete ? 0 : 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="bg-brand relative flex h-screen w-full flex-col items-start justify-end p-3.5 md:p-6"
    >
      <motion.span
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isComplete ? '-50px' : 0,
          opacity: isComplete ? 0 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: isComplete ? 0.1 : 0,
        }}
        className="text-link font-regular text-4xl italic md:text-[45px]"
      >
        {percentage.toString().padStart(2, '0')}%
      </motion.span>
      <motion.p
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isComplete ? '-30px' : 0,
          opacity: isComplete ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: isComplete ? 0.05 : 0,
        }}
        className="text-gradient-red flex w-dvw items-center text-[56px] leading-[268.15px] tracking-[-0.06em] uppercase transition-all duration-500 ease-out md:text-[233px]"
      >
        <span>zenl</span>
        <span className="relative inline-block">
          <span className="text-gradient-red">o</span>
          {Array.from({ length: totalOs - baseVisible }).map((_, index) => {
            const realIndex = index + baseVisible;
            const isVisible = realIndex < visibleOs;
            const shift = animatedOShiftBase + index * animatedOShiftStep;
            return (
              <AnimatedOLetter
                key={realIndex}
                index={realIndex}
                isVisible={isVisible}
                shift={shift}
                isMobile={isMobile}
                isAccumulationPhase={isAccumulationPhase}
              />
            );
          })}
        </span>
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: kShift }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.05,
          }}
          className="text-gradient-red inline-block transition-transform ease-out"
        >
          o
        </motion.span>

        <motion.span
          initial={{ x: 0 }}
          animate={{ x: kShift }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.05,
          }}
          className="text-gradient-red inline-block w-max ease-out"
        >
          k
        </motion.span>
      </motion.p>
    </motion.section>
  );
};

export default Preloader;
