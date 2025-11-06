/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import CardBeauty from '@/components/molecules/CardBeauty/CardBeauty';
import { ReviewCardProps } from '../ReviewCard/ReviewCard.types';
import { FC, useState, useEffect, useRef, useMemo } from 'react';
import { CardBeautyProps } from '../CardBeauty/CardBeauty.type';
import { motion, useInView, PanInfo } from 'framer-motion';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import ReviewCard from '../ReviewCard/ReviewCard';
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
  const [isDragging, setIsDragging] = useState(false);
  const { isDesktop, isTablet } = useBreakpoint();
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isCardBeauty = (v: unknown): v is CardBeautyProps =>
    !!v && typeof v === 'object' && 'image' in (v as any) && 'variant' in (v as any);

  const isReviewCard = (v: unknown): v is ReviewCardProps =>
    !!v && typeof v === 'object' && 'text' in (v as any) && 'author' in (v as any) && 'image' in (v as any);

  const slideWidth = 100 / slidesToShow;

  const totalSlides = items.length;

  const clonedSlides = useMemo(() => items.slice(0, Math.floor(slidesToShow)), [items, slidesToShow]);

  const slides = useMemo<(CardBeautyProps | 'placeholder' | ReviewCardProps)[]>(
    () =>
      hasShownPlaceholder && slidesToShow >= 2
        ? ['placeholder', ...items, ...clonedSlides]
        : [...items, ...clonedSlides],
    [hasShownPlaceholder, slidesToShow, items, clonedSlides],
  );

  useEffect(() => {
    if (isDesktop) {
      setSlidesToShow(3);
    } else if (isTablet) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1.3);
    }
  }, [isDesktop, isTablet]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    setIsPlaying(isVisible && isInView && !isDragging);
  }, [isVisible, isInView, isDragging]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1500);
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

  const handleDragStart = () => {
    if (isDesktop) {
      setIsDragging(true);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);

    if (isDesktop) {
      const threshold = 50;
      setIsPlaying(false);

      if (info.offset.x > threshold) {
        handlePrev();
      } else if (info.offset.x < -threshold) {
        handleNext();
      }
    }
  };

  return (
    <div ref={containerRef} className="relative flex w-full flex-col gap-6 overflow-hidden">
      <motion.div
        ref={ref}
        className={`flex ${isDesktop ? 'cursor-grab active:cursor-grabbing' : ''} ${isReviewCard(slides[0]) ? 'gap-5' : ''}`}
        animate={{ x: `-${currentIndex * slideWidth}%` }}
        transition={{
          duration: isDragging ? 0 : 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        drag={isDesktop ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
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
            <div
              className={`${
                slidesToShow < 2 ? 'w-full' : 'md:mx-auto md:max-w-[450px]'
              } ${isReviewCard(item) ? 'md:max-w-[330px]' : ''}`}
            >
              {item === 'placeholder' ? (
                <div className="hidden h-full w-full rounded-2xl bg-gray-200 shadow-inner md:block" />
              ) : isCardBeauty(item) ? (
                <CardBeauty {...item} />
              ) : isReviewCard(item) ? (
                <ReviewCard {...item} />
              ) : null}
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
