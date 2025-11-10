'use client';

import ReviewCard from '@/components/molecules/ReviewCard/ReviewCard';
import Slider from '@/components/molecules/Slider/Slider';
import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import Label from '@/components/atoms/Label/Label';
import { ReviewsProps } from './Reviews.types';
import { useScroll } from 'framer-motion';
import React, { FC, useRef } from 'react';

const Reviews: FC<ReviewsProps> = ({ label, title, reviews, button }) => {
  const { isMobile } = useBreakpoint();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="flex flex-col items-center justify-center gap-5 lg:gap-14">
      <div className="flex max-w-[909px] flex-col items-center justify-center gap-6">
        {label && <Label {...label} />}
        <Heading
          {...title}
          className="text-gradient-red text-[44px] leading-none tracking-tighter md:text-5xl lg:text-[80px]"
        />
      </div>

      {isMobile ? (
        <Slider items={reviews} />
      ) : (
        <section ref={container} className="relative w-full">
          {reviews.map((review, index) => {
            const isLast = index === reviews.length - 1;
            const targetScale = isLast ? 1 : 0.94;
            const topPx = index === 0 ? 60 : 60 + index * 20;

            return (
              <div
                key={index}
                className="card-review sticky will-change-transform"
                style={{ top: `${topPx}px`, zIndex: 10 + index }}
              >
                <ReviewCard
                  {...review}
                  progress={scrollYProgress}
                  range={[index * 0.25, 1]}
                  targetScale={targetScale}
                />
              </div>
            );
          })}
        </section>
      )}

      {button && <Button {...button} className="w-full md:w-max" />}
    </section>
  );
};

export default Reviews;
