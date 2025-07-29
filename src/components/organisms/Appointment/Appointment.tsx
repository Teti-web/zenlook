import Slider from '@/components/molecules/Slider/Slider';
import Heading from '@/components/atoms/Heading/Heading';
import { AppointmentProps } from './Appointment.type';
import Label from '@/components/atoms/Label/Label';
import { FC } from 'react';

const Appointment: FC<AppointmentProps> = ({ title, description, label, slider }) => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:min-w-[463px]">{label && <Label {...label} />}</div>
      <div className="flex w-full flex-col gap-4 md:gap-10">
        <div className="flex w-full flex-col items-end gap-8 md:flex-row md:gap-7">
          <Heading {...title} className="text-gradient-red text-left leading-none md:max-w-[660px]" />
          <p className="font-regular text-secondary font-sans md:max-w-[224px] md:text-base">{description}</p>
        </div>
        <Slider {...slider} className="relative" />
      </div>
    </section>
  );
};

export default Appointment;
