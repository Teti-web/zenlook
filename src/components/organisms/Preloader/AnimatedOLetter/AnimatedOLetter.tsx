'use client';

import { AnimatedOLetterProps } from './AnimatedOLetter.type';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedOLetter = ({
  index,
  isVisible,
  shift,
  isMobile = false,
  isAccumulationPhase = false,
}: AnimatedOLetterProps) => {
  if (!isVisible) return null;

  return (
    <motion.span
      initial={{
        opacity: 0,
        x: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: isAccumulationPhase ? 0 : shift,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: 0,
        scale: 0.9,
      }}
      transition={{
        opacity: {
          duration: 0.4,
          delay: (index - 2) * 0.2,
          ease: 'easeOut',
        },
        x: {
          duration: isAccumulationPhase ? 0.4 : 1.2,
          ease: isAccumulationPhase ? 'easeOut' : [0.22, 1, 0.36, 1],
          delay: isAccumulationPhase ? (index - 2) * 0.15 : (index - 2) * 0.1,
        },
        scale: {
          duration: 0.5,
          delay: (index - 2) * 0.2,
          ease: 'easeOut',
        },
      }}
      className="text-gradient-red absolute inline-block"
      style={{
        zIndex: isAccumulationPhase ? 20 - index : index + 10,
        transformOrigin: 'left center',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      o
    </motion.span>
  );
};

export default AnimatedOLetter;
