'use client';
import type { DescriptionProps } from './Description.type';
import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Description: FC<DescriptionProps> = ({ description, button, title, boldText, variant = 'primary', isAnimated = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variantClass =
    variant === 'primary'
      ? 'flex-col md:flex-row items-start md:justify-start my-10 gap-5 md:gap-10 xl:gap-20'
      : 'flex-col items-center justify-center w-full my-4 gap-4';
  const variantClassText =
    variant === 'secondary' ? 'w-full justify-center  items-center text-center md:max-w-[455px]' : '';

  return (
    <div ref={ref} className={`flex ${variantClass}`}>
      {title && (
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 20 } : false}
          animate={isAnimated && isInView ? { opacity: 1, y: 0 } : isAnimated ? { opacity: 0, y: 20 } : false}
          transition={isAnimated ? { duration: 0.6, delay: 0 } : undefined}
        >
          <Heading {...title} />
        </motion.div>
      )}
      
      {boldText && (
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 20 } : false}
          animate={isAnimated && isInView ? { opacity: 1, y: 0 } : isAnimated ? { opacity: 0, y: 20 } : false}
          transition={isAnimated ? { duration: 0.6, delay: 0.1 } : undefined}
        >
          <p className="text-secondary text-2xl font-semibold md:max-w-[835px] md:text-[40px]">{boldText}</p>
        </motion.div>
      )}
      
      <div className={`${variantClassText} flex flex-col gap-10 md:max-w-[380px] md:gap-7`}>
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 20  } : false}
          animate={isAnimated && isInView ? { opacity: 1, y: 0 } : isAnimated ? { opacity: 0, y: 20 } : false}
          transition={isAnimated ? { duration: 0.6, delay: 0.2 } : undefined}
        >
          <p className="body-text">{description}</p>
        </motion.div>
        
        {button && (
          <motion.div
            initial={isAnimated ? { opacity: 0, scaleY: 0 } : false}
            animate={isAnimated && isInView ? { opacity: 1, scaleY: 1 } : isAnimated ? { opacity: 0, scaleY: 0 } : false}
            transition={isAnimated ? { duration: 0.5, delay: 0.4 } : undefined}
            style={isAnimated ? { transformOrigin: 'center' } : undefined}
          >
            <Button {...button} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Description;
