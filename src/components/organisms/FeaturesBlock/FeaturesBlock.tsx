"use client"

import type { FeaturesBlockProps } from './FeaturesBlock.type';
import Heading from '@/components/atoms/Heading/Heading';
import Card from '@/components/molecules/Card/Card';
import Label from '@/components/atoms/Label/Label';
import { FC, useRef } from 'react';
import { motion, useInView  } from 'framer-motion';

const FeaturesBlock: FC<FeaturesBlockProps> = ({ label, title, features }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="relative flex flex-col gap-4 md:gap-6" ref={ref}>
      <motion.div className="flex flex-col-reverse gap-6 md:flex-col items-center justify-center max-w-[937px] mx-auto"
          initial={ { opacity: 0, y: 20, scaleY: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scaleY: 1 } :  { opacity: 0, y: 20, scaleY: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 } }
        >
        <Heading {...title}  className='text-center text-gradient-red text-[44px] leading-none md:text-[112px] md:leading-[92px]'/>
        <Label {...label} />
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
        {features.map((feature) => (
          <Card key={feature.decorativeNumber} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesBlock;
