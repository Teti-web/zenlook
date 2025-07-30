'use client';

import CardBeauty from '@/components/molecules/CardBeauty/CardBeauty';
import { CardBeautyProps } from '../CardBeauty/CardBeauty.type';
import { FC, useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SliderProps } from './Slider.type';
import Image from 'next/image';

const Slider: FC<SliderProps> = ({ items }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [hasShownPlaceholder, setHasShownPlaceholder] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clonedSlides = items.slice(0, slidesToShow);

  const slideWidth = 100 / slidesToShow;

  // Для мобілки не використовуємо placeholder
  const shouldUsePlaceholder = hasShownPlaceholder && slidesToShow >= 2;
  const slides = shouldUsePlaceholder ? ['placeholder', ...items, ...clonedSlides] : [...items, ...clonedSlides];

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
    if (slidesToShow >= 2 && currentIndex === totalSlides + 1) {
      if (hasShownPlaceholder) {
        setHasShownPlaceholder(false);
        setCurrentIndex(1);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
        }, 50);
      }
    } else if (slidesToShow < 2 && currentIndex >= totalSlides) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 50);
    }
  }, [currentIndex, totalSlides, hasShownPlaceholder, slidesToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => {
    if (isVisible) setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col gap-6 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
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
              paddingLeft: slidesToShow < 2 ? '0px' : '8px',
              paddingRight: slidesToShow < 2 ? '0px' : '8px',
            }}
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={slidesToShow < 2 ? 'w-full' : 'md:mx-auto md:max-w-[450px]'}>
              {item === 'placeholder' ? (
                <div className="hidden h-full w-full rounded-2xl bg-gray-200 shadow-inner md:block" />
              ) : (
                <CardBeauty {...(item as CardBeautyProps)} />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex gap-4 md:hidden">
        <button
          className="bg-link inset-shadow-yellow flex h-11 w-11 items-center justify-center rounded-full"
          onClick={handlePrev}
        >
          <Image src="/images/icons/arrow-white.svg" alt="arrow-left" width={14} height={17} className="rotate-180" />
        </button>
        <button
          className="bg-link inset-shadow-yellow flex h-11 w-11 items-center justify-center rounded-full"
          onClick={handleNext}
        >
          <Image src="/images/icons/arrow-white.svg" alt="arrow-right" width={14} height={17} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
