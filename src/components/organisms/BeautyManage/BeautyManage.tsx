'use client';

import { BeautyManageProps, BeautyManageTabProps } from './BeautyManage.type';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ImageProps } from '@/components/atoms/Image/Image.type';
import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import React, { FC, useRef, useState } from 'react';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import Tab from '@/components/molecules/Tab/Tab';

const BeautyManage: FC<BeautyManageProps> = ({ title, description, tabs, button, label }) => {
  const { isMobile } = useBreakpoint();
  const [activeTab, setActiveTab] = useState<BeautyManageTabProps>(tabs[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scaleY: 0.8,
      y: -20,
    },
  };

  return (
    <section className="relative grid grid-cols-1 py-10 md:grid-cols-2 md:py-12 lg:py-16" ref={ref}>
      <motion.div
        animate={
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
        className="absolute top-117 -left-14 z-[-1] w-36 md:top-67 md:left-130 md:w-auto"
      >
        <Image src="/images/manage-decorative-1.png" width={300} height={257} alt="" />
      </motion.div>
      <motion.div
        animate={
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
        className="absolute top-71 left-46 z-[-1] w-36 md:-top-11 md:left-162 md:w-[230px] lg:-top-11 lg:left-255"
      >
        <Image src="/images/manage-decorative-2.png" width={300} height={257} alt="" />
      </motion.div>
      <div className="flex flex-col gap-8">
        {label && isMobile && <Label {...label} />}
        <Heading {...title} className="text-gradient-red md:text-left" />
        <motion.div
          className="border-hover-stroke flex flex-row justify-between border-t border-b p-1 md:max-w-[380px] md:justify-start md:gap-0.5 md:px-0 md:py-1 lg:w-max lg:max-w-max"
          layout
        >
          {tabs.map((tab) => (
            <Tab key={tab.name} {...tab} isActive={activeTab.name === tab.name} onClick={() => setActiveTab(tab)} />
          ))}
        </motion.div>
        <div className="block h-full w-full md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${activeTab.name}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Image quality={100} {...(activeTab.content as ImageProps)} className="opacity-95" />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="body-text max-w-[380px]">{description}</p>
        {button && <Button {...button} className="md:w-max" />}
      </div>
      <div className="hidden h-full w-full md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={`desktop-${activeTab.name}`}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="h-full w-full"
          >
            <Image quality={100} {...(activeTab.content as ImageProps)} className="opacity-95" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BeautyManage;
