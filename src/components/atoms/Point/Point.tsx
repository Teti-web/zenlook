'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { motion, useInView } from 'framer-motion';
import { PointProps } from './Point.type';
import { FC, useRef } from 'react';

const Point: FC<PointProps> = ({ isOpen, onClick, positionMobile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { isMobile } = useBreakpoint();

  return (
    <button
      ref={ref}
      className={`bg-background relative flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8 ${
        isOpen ? 'z-20' : 'z-[3]'
      } ${isMobile ? 'absolute md:relative' : ''}`}
      style={isMobile && positionMobile ? { top: positionMobile.top, left: positionMobile.left } : {}}
      onClick={onClick}
    >
      {isOpen ? (
        <MinusIcon className="text-secondary h-4 w-4 md:h-6 md:w-6" />
      ) : (
        <PlusIcon className="text-secondary h-4 w-4 md:h-6 md:w-6" />
      )}
      <motion.span
        className="bg-background/40 absolute top-1/2 left-1/2 z-[2] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-12 md:w-12"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: isOpen ? 1 : isInView ? [0.4, 0.7, 0.4] : 0,
          scale: isInView && !isOpen ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: isOpen ? 0.3 : 2,
          ease: 'easeInOut',
          repeat: isInView && !isOpen ? Infinity : 0,
          repeatType: 'loop',
        }}
      />
      <motion.span
        className="bg-background/20 absolute top-1/2 left-1/2 z-[1] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-16 md:w-16"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: isInView && !isOpen ? [0.2, 0.5, 0.2] : 0,
          scale: isInView && !isOpen ? [1, 1.4, 1] : 1,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: isInView && !isOpen ? Infinity : 0,
          repeatType: 'loop',
          delay: 0.3,
        }}
      />
    </button>
  );
};

export default Point;
