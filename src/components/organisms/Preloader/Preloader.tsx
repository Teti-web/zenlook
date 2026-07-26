'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { RingChain } from './RingChain/RingChain';
import { useRingMetrics } from './RingChain/useRingMetrics';
import { motion, animate } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

const REVEAL_DURATION = 2.5;
const EXIT_DURATION = 0.7;

function PercentageCounter({ onDone }: { onDone: () => void }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: REVEAL_DURATION,
      ease: 'easeInOut',
      onUpdate: (v) => setValue(Math.round(v)),
      onComplete: onDone,
    });
    return () => controls.stop();
  }, [onDone]);

  return <>{value.toString().padStart(2, '0')}%</>;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isComplete, setIsComplete] = useState(false);

  const wordRef = useRef<HTMLParagraphElement>(null);
  const zenlRef = useRef<HTMLSpanElement>(null);
  const kRef = useRef<HTMLSpanElement>(null);

  const { maxCount, metrics } = useRingMetrics(wordRef, zenlRef, kRef);

  const handlePercentageDone = useCallback(() => {
    setIsComplete(true);
    setTimeout(() => onComplete?.(), EXIT_DURATION * 1000);
  }, [onComplete]);

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isComplete ? '-100%' : 0,
        opacity: isComplete ? 0 : 1,
      }}
      transition={{
        duration: EXIT_DURATION,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="bg-brand relative flex h-screen w-full flex-col items-start justify-end overflow-hidden p-3.5 md:p-6"
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
        <PercentageCounter onDone={handlePercentageDone} />
      </motion.span>

      <motion.p
        ref={wordRef}
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
        className="text-gradient-red flex w-full items-center overflow-hidden text-[56px] leading-none tracking-[-0.06em] whitespace-nowrap uppercase md:text-[233px]"
      >
        <span ref={zenlRef}>zenl</span>
        <RingChain maxCount={maxCount} metrics={metrics} duration={REVEAL_DURATION} />
        <span ref={kRef} className="inline-block">
          k
        </span>
      </motion.p>
    </motion.section>
  );
};

export default Preloader;
