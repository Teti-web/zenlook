'use client';

import { AnimatedOLetterProps } from './AnimatedOLetter.type';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedOLetter = ({ index, isVisible, shift, isMobile = false }: AnimatedOLetterProps) => {
  if (!isVisible) return null;

  return (
    <motion.span
      initial={{ opacity: 0, x: isMobile ? 10 : 20, scale: 0.3 }}
      animate={{ opacity: 1, x: shift, scale: 1 }}
      exit={{ opacity: 0, x: isMobile ? 10 : 20, scale: 0.3 }}
      transition={{
        duration: isMobile ? 0.4 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: (index - 2) * (isMobile ? 0.1 : 0.15),
      }}
      className="text-gradient-red inline-block"
      style={{
        zIndex: index + 10,
      }}
    >
      o
    </motion.span>
  );
};

export default AnimatedOLetter;
