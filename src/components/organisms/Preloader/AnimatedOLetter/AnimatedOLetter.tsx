'use client';

import { AnimatedOLetterProps } from './AnimatedOLetter.type';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedOLetter = ({ index, isVisible, shift }: AnimatedOLetterProps) => {
  if (!isVisible) return null;

  return (
    <motion.span
      initial={{ opacity: 0, x: 20, scale: 0.3 }}
      animate={{ opacity: 1, x: shift, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier для плавності
        delay: (index - 2) * 0.15, // Збільшена затримка для плавності
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
