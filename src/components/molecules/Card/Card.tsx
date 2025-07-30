'use client';

import Heading from '@/components/atoms/Heading/Heading';
import Image from '@/components/atoms/Image/Image';
import { motion, useInView } from 'framer-motion';
import { CardProps } from './Card.type';
import { FC, useRef } from 'react';

const Card: FC<CardProps> = ({
  title,
  description,
  decorativeNumber,
  image,
  className,
  decoratorsImage,
  translate,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const translateClass =
    translate === 'top'
      ? 'lg:absolute lg:-top-87 lg:left-8'
      : translate === 'middle'
        ? 'lg:absolute lg:-top-40 lg:right-8'
        : ' ';
  return (
    <div
      className={`${className} ${translateClass} border-peach bg-content-inverce-blur flex w-full max-w-[391px] flex-col border backdrop-blur-sm`}
      ref={ref}
    >
      <div className="flex flex-col gap-[40px] bg-transparent p-10 md:gap-8">
        <span className="text-secondary font-regular font-sans text-xs leading-[18px] tracking-wider">
          [&nbsp;{decorativeNumber}&nbsp;]
        </span>
        <div className="flex flex-col gap-4">
          <Heading variant="h3" text={title.text} className="text-secondary text-left leading-[44px]" />
          <p className="font-regular body-text">{description}</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60, scaleY: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scaleY: 1 } : { opacity: 0, y: 60, scaleY: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-peach relative border-t"
      >
        <Image {...image} className="h-full w-full object-cover" />
        {decoratorsImage &&
          decoratorsImage.map((decorator) => (
            <Image
              key={decorator.src}
              {...decorator}
              className={`absolute hidden h-[69px] w-[125px] rounded-[12px] object-cover md:block ${decorator.className}`}
            />
          ))}
      </motion.div>
    </div>
  );
};

export default Card;
