'use client';

import CardBeauty from '@/components/molecules/CardBeauty/CardBeauty';
import { CardBeautyProps } from '../CardBeauty/CardBeauty.type';
import { FC, useState, useEffect, useRef } from 'react';
import { SliderProps } from './Slider.type';
import { motion } from 'framer-motion';

const Slider: FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [hasShownPlaceholder, setHasShownPlaceholder] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clonedSlides = items.slice(0, slidesToShow);

  const slideWidth = 100 / slidesToShow;

  const slides = hasShownPlaceholder ? ['placeholder', ...items, ...clonedSlides] : [...items, ...clonedSlides];

  const totalSlides = items.length;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(3);
      } else if (width >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1.3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    setIsPlaying(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      if (hasShownPlaceholder) {
        setHasShownPlaceholder(false);
        setCurrentIndex(1);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
        }, 50);
      }
    }
  }, [currentIndex, totalSlides, hasShownPlaceholder]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => {
    if (isVisible) setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * slideWidth}%` }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {slides.map((item, index) => (
          <motion.div
            key={typeof item === 'string' ? `placeholder-${index}` : `${item.image.src}-${index}`}
            className="flex-shrink-0"
            style={{
              width: `${slideWidth}%`,
              paddingLeft: '8px',
              paddingRight: '8px',
            }}
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto max-w-[450px]">
              {item === 'placeholder' ? (
                <div className="h-full w-full rounded-2xl bg-gray-200 shadow-inner" />
              ) : (
                <CardBeauty {...(item as CardBeautyProps)} />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
