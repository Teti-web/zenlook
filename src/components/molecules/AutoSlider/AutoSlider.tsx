'use client';
import type { AutoSliderProps } from './AutoSlider.type';
import { motion, useAnimation } from 'framer-motion';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import { FC, useEffect } from 'react';

const AutoSlider: FC<AutoSliderProps> = ({ label, items }) => {
  const duplicatedItems = [...items, ...items];
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: `-${50}%`,
        transition: {
          duration: items.length * 4,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    };

    startAnimation();
  }, [controls, items.length]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: `-${50}%`,
      transition: {
        duration: items.length * 4,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:gap-6 md:py-8">
      {label && <Label {...label} />}

      <div className="relative w-full overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <motion.div
          className="flex flex-row items-center justify-center gap-8 md:gap-28"
          animate={controls}
          initial={{ x: 0 }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="max-w-[250px] flex-shrink-0 md:max-w-[450px]"
            >
              <Image {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AutoSlider;
