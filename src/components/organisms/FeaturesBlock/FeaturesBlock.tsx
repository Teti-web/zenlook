'use client';

import type { FeaturesBlockProps } from './FeaturesBlock.type';
import Heading from '@/components/atoms/Heading/Heading';
import Card from '@/components/molecules/Card/Card';
import Label from '@/components/atoms/Label/Label';
import { motion, useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import Image from '@/components/atoms/Image/Image';

const FeaturesBlock: FC<FeaturesBlockProps> = ({ label, title, features }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="relative flex flex-col gap-8 md:gap-12" ref={ref}>
        <motion.div  animate={
            isInView
              ? {
                  y: [-8, 12, -8],
                  x: [2, -2, 2],
                  rotate: [-4, 4, -4],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.9,
          }} 
          className='absolute top-31 -right-14 md:right-auto md:left-95 md:top-83 md:z-10'>
            <Image src='/images/features-decor.png' width={175} height={175} alt='' />
        </motion.div>
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
      <div className="relative flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
        {features.map((feature) => (
          <Card key={feature.decorativeNumber} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesBlock;
