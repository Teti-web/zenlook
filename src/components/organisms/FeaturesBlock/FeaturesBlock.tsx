'use client';

import type { FeaturesBlockProps } from './FeaturesBlock.type';
import Heading from '@/components/atoms/Heading/Heading';
import Card from '@/components/molecules/Card/Card';
import Label from '@/components/atoms/Label/Label';
import { motion, useInView } from 'framer-motion';
import { FC, useRef } from 'react';

const FeaturesBlock: FC<FeaturesBlockProps> = ({ label, title, features }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="relative flex flex-col gap-4 md:gap-6" ref={ref}>
      <motion.div
        className="mx-auto flex max-w-[937px] flex-col-reverse items-center justify-center gap-6 md:flex-col"
        initial={{ opacity: 0, y: 20, scaleY: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scaleY: 1 } : { opacity: 0, y: 20, scaleY: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Heading
          {...title}
          className="text-gradient-red text-center text-[44px] leading-none md:text-[112px] md:leading-[92px]"
        />
        <Label {...label} />
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8 relative">
        {features.map((feature) => (
          <Card key={feature.decorativeNumber} {...feature} />
        ))}
      </div>

    </section>
  );
};

export default FeaturesBlock;
