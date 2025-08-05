'use client';

import BoxFeature from '@/components/molecules/BoxFeature/BoxFeature';
import TextBox from '@/components/molecules/TextBox/TextBox';
import Heading from '@/components/atoms/Heading/Heading';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { BagFeaturesProps } from './BagFeatures.type';
import Point from '@/components/atoms/Point/Point';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import { FC, useRef, useState } from 'react';

const BagFeatures: FC<BagFeaturesProps> = ({ label, title, features, image }) => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { isMobile } = useBreakpoint();
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number } | null>(null);

  const handleMobilePointClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (isMobile) {
      setTimeout(() => {
        textRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 100);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const deltaX = touchStartRef.current.x - touchEndRef.current.x;
    const deltaY = Math.abs(touchStartRef.current.y - touchEndRef.current.y);
    const minSwipeDistance = 50;

    // Перевіряємо що це горизонтальний свайп (deltaY менше за deltaX)
    if (Math.abs(deltaX) > minSwipeDistance && deltaY < Math.abs(deltaX)) {
      if (deltaX > 0) {
        // Свайп вліво - наступний TextBox
        handleSwipeLeft();
      } else {
        // Свайп вправо - попередній TextBox
        handleSwipeRight();
      }
    }

    // Очищуємо значення
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  const handleSwipeLeft = () => {
    if (activeIndex !== null) {
      // Зациклювання: якщо останній елемент, переходимо до першого
      const newIndex = activeIndex < features.length - 1 ? activeIndex + 1 : 0;
      setActiveIndex(newIndex);
      setTimeout(() => {
        textRefs.current[newIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 100);
    }
  };

  const handleSwipeRight = () => {
    if (activeIndex !== null) {
      // Зациклювання: якщо перший елемент, переходимо до останнього
      const newIndex = activeIndex > 0 ? activeIndex - 1 : features.length - 1;
      setActiveIndex(newIndex);
      setTimeout(() => {
        textRefs.current[newIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 100);
    }
  };

  return (
    <section className="relative flex flex-col items-center md:h-dvh md:pt-7 lg:mb-20 lg:h-[860px] lg:pt-20">
      <div className="flex flex-col items-center justify-center gap-12 md:gap-6 lg:max-w-[746px]">
        <Label {...label} />
        <Heading
          {...title}
          className="text-gradient-red text-[44px] leading-none tracking-tighter md:text-5xl lg:text-[68px]"
        />
      </div>
      <div className="relative h-full w-full">
        <Image
          {...image}
          quality={100}
          className="z-[-1] w-full md:absolute md:-top-55 md:left-1/2 md:-translate-x-1/2 lg:h-[1092px] lg:w-[1132px]"
        />

        {/* Desktop version - BoxFeature components */}
        {features.map((feature, index) => (
          <BoxFeature key={index} {...feature} allItems={features.length} index={index} />
        ))}

        {/* Mobile version - Point components only */}
        <div className="absolute top-0 left-0 h-full w-full md:hidden">
          {features.map((feature, index) => (
            <Point
              key={index}
              isOpen={activeIndex === index}
              onClick={() => handleMobilePointClick(index)}
              positionMobile={{ top: feature.position.top.mobile, left: feature.position.left.mobile }}
            />
          ))}
        </div>
      </div>

      {/* Mobile text content below image */}
      <div
        className="relative flex w-full items-center gap-4 overflow-hidden py-4 md:hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              textRefs.current[index] = el;
            }}
            className={`transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70'}`}
          >
            <TextBox isOpen={true} {...feature} index={index} allItems={features.length} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BagFeatures;
