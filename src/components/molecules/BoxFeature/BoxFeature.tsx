import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { BoxFeatureProps } from './BoxFeature.type';
import { motion, useInView } from 'framer-motion';
import { FC, useState, useRef } from 'react';

const BoxFeature: FC<BoxFeatureProps> = ({ title, description, position, index, allItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="absolute flex flex-col items-center justify-center"
      style={{ top: position.top, left: position.left }}
    >
      <button
        className="bg-background relative z-10 flex h-8 w-8 items-center justify-center rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MinusIcon className="text-secondary h-6 w-6" /> : <PlusIcon className="text-secondary h-6 w-6" />}
        <motion.span
          className="bg-background/40 absolute top-1/2 left-1/2 z-[2] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
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
          className="bg-background/20 absolute top-1/2 left-1/2 z-[1] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
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

      <motion.div
        className={`border-peach bg-content-inverce-blur flex flex-col gap-6 border p-8 backdrop-blur-[20px] md:max-w-[393px] md:gap-4 md:px-6 md:pt-12 md:pb-6 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
        initial={{
          opacity: 0,
          y: -10,
          scaleY: 0.3,
          height: 0,
          x: 0,
          borderBottomLeftRadius: '9999px',
          borderBottomRightRadius: '9999px',
        }}
        animate={
          isOpen
            ? {
                opacity: 1,
                y: 0,
                x: 0,
                scaleY: 1,
                height: 'auto',
                borderBottomLeftRadius: '0',
                borderBottomRightRadius: '0',
              }
            : {
                opacity: 0,
                y: -10,
                x: 0,
                scaleY: 0.3,
                height: 0,
                borderBottomLeftRadius: '9999px',
                borderBottomRightRadius: '9999px',
              }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <p className="font-regular text-secondary flex items-center font-sans text-xs md:hidden">
          [{index}
          <span className="font-regular text-content-secondary font-sans text-xs">/{allItems}]</span>
        </p>
        <motion.p
          className="font-sans text-2xl font-semibold md:text-3xl lg:text-[40px]"
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {title}
        </motion.p>
        <motion.p
          className="font-regular font-sans text-xs md:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BoxFeature;
