'use client';

import ReviewCard from '@/components/molecules/ReviewCard/ReviewCard';
import Slider from '@/components/molecules/Slider/Slider';
import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import React, { FC, useEffect, useRef } from 'react';
import Label from '@/components/atoms/Label/Label';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReviewsProps } from './Reviews.types';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Reviews: FC<ReviewsProps> = ({ label, title, reviews, button }) => {
  const { isMobile } = useBreakpoint();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isMobile) return;

    const section = containerRef.current;
    const cards = cardsRef.current;
    if (!section) return;

    // Timeline, який керує всім блоком
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: `+=${cards.length}`,
        pin: true,
        scrub: true,
      },
    });

    const spacer = 20;
    const minScale = 0.8;
    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, i) => {
      if (!card) return;
      const scaleVal = distributor(i, card, cards);

      tl.to(
        card,
        {
          y: i * spacer,
          scale: scaleVal,
        },
        i * 0.2, // зсув у таймлайні
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [isMobile]);

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
        <section ref={containerRef} className="relative w-full">
          <div className="cards-review relative w-full">
            {reviews.map((review, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="relative"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </section>
      )}

      {button && <Button {...button} className="w-full md:w-max" />}
    </section>
  );
};

export default Reviews;
