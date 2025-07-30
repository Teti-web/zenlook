'use client';

import Slider from '@/components/molecules/Slider/Slider';
import Heading from '@/components/atoms/Heading/Heading';
import { AppointmentProps } from './Appointment.type';
import Label from '@/components/atoms/Label/Label';
import { motion, useInView } from 'framer-motion';
import { FC, useRef } from 'react';

const Appointment: FC<AppointmentProps> = ({ title, description, label, slider }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="flex flex-col gap-4 md:gap-10" ref={ref}>
      <div className="flex w-full flex-col md:flex-row">
        <div className="md:min-w-[463px]">{label && <Label {...label} />}</div>
        <motion.div
          initial={{ opacity: 0, y: 20, scaleY: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scaleY: 1 } : { opacity: 0, y: 20, scaleY: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col items-end gap-8 md:flex-row md:gap-7"
        >
          <Heading {...title} className="text-gradient-red text-left leading-none md:max-w-[660px]" />
          <p className="font-regular text-secondary font-sans md:max-w-[224px] md:text-base">{description}</p>
        </motion.div>
      </div>
      <Slider {...slider} className="relative" />
    </section>
  );
};

export default Appointment;
