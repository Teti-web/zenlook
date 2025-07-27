'use client';
import Description from '@/components/molecules/Description/Description';
import Image from '@/components/atoms/Image/Image';
import { motion, useInView } from 'framer-motion';
import type { IntroProps } from './Intro.type';
import { FC, useRef } from 'react';

const Intro: FC<IntroProps> = ({ description, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className=" " ref={ref}>
      <div className="border-hover-stroke relative mt-2 h-dvh md:border 2xl:h-[80dvh]">
        <span className="bg-hover-stroke absolute top-0 left-[32.36vw] hidden h-full w-[1px] md:block" />
        <span className="bg-hover-stroke absolute top-0 right-[32.36vw] hidden h-full w-[1px] md:block" />
        <div className="absolute top-32 left-1/2 z-10 flex w-full max-w-[930px] -translate-x-1/2 flex-col items-center justify-center gap-4">
          {label && (
            <span className="text-brand border-brand w-max border-b pb-1.5 text-sm uppercase md:text-lg">{label}</span>
          )}
          <Description {...description} variant="secondary" isAnimated={true} />
        </div>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-120 left-[-3.59px] h-auto w-60 md:top-[356.79px] md:left-[-3px] md:w-[417px]"
      >
        <motion.div
          animate={
            isInView
              ? {
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
        >
          <Image
            src="/images/intro/decorator-1.png"
            alt="decorator-1"
            width={417}
            height={537}
            quality={100}
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className="absolute top-3 left-[-3.59px] h-auto w-32 lg:top-[-117px] lg:left-[300px] lg:w-[344px]"
      >
        <motion.div
          animate={
            isInView
              ? {
                  y: [-8, 12, -8],
                  x: [2, -2, 2],
                  rotate: [-2, 2, -2],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.9,
          }}
        >
          <Image
            src="/images/intro/decorator-2.png"
            mobileSrc="/images/intro/decorator-2-mobile.png"
            tabletSrc="/images/intro/decorator-2-mobile.png"
            alt="decorator-2"
            width={344}
            height={344}
            quality={100}
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute top-20 right-[-32.59px] z-2 h-auto w-28 md:top-[141px] md:right-[46px] md:w-[322px]"
      >
        <motion.div
          animate={
            isInView
              ? {
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.0,
          }}
        >
          <Image
            src="/images/intro/decorator-3.png"
            alt="decorator-3"
            width={322}
            height={373}
            quality={100}
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0, scale: 0.5 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1 } : { x: 0, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="absolute top-132 right-4 z-2 h-auto w-20 md:top-[641px] md:right-[358px] md:w-[214px]"
      >
        <motion.div
          animate={
            isInView
              ? {
                  y: [-8, 12, -8],
                  x: [3, -3, 3],
                  rotate: [-2, 2, -2],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.1,
          }}
        >
          <Image
            src="/images/intro/decorator-4.png"
            alt="decorator-4"
            width={214}
            height={214}
            quality={100}
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
