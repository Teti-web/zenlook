'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';
import type { ReviewCardProps } from './ReviewCard.types';
import Image from '@/components/atoms/Image/Image';
import React, { FC, useRef } from 'react';

const ReviewCard: FC<ReviewCardProps> = ({
  i,
  progress,
  range,
  targetScale,
  text,
  author,
  image,
  backgroundColor = 'red',
}) => {
  let cardColor = '';
  switch (backgroundColor) {
    case 'peach':
      cardColor = 'bg-gradient-red-blur';
      break;
    case 'pink':
      cardColor = 'bg-gradient-red';
      break;
    case 'orange':
      cardColor = 'bg-gradient-red';
      break;
    case 'yellow':
      cardColor = 'bg-gradient-yellow';
      break;
    case 'red':
      cardColor = 'bg-gradient-red-blur';
      break;
    default:
      cardColor = 'bg-gradient-red';
      break;
  }

  const container = useRef(null);

  const scale = useTransform(progress as MotionValue<number>, range as [number, number], [1, targetScale as number]);

  return (
    <div ref={container}>
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i ?? 0 * 25}px)` }}
        className={`${cardColor} flex w-full flex-col gap-5 p-4 md:flex-row-reverse md:items-center md:justify-between md:p-8`}
      >
        <Image {...image} className="aspect-square" />
        <div className="flex flex-col gap-5 md:max-w-[852px]">
          <p className="text-content-inverce text-left font-sans text-2xl leading-7 font-semibold md:max-w-[784px] md:text-center md:text-[40px] md:leading-11">
            {text}
          </p>
          <p className="text-content-inverce font-regular text-left font-sans text-sm md:text-center md:text-lg">
            {author}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewCard;
