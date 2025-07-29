import type { SliderProps } from '@/components/molecules/Slider/Slider.type';
import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { LabelProps } from '@/components/atoms/Label/Label.type';

export type AppointmentProps = {
  title: HeadingProps;
  description: string;
  label?: LabelProps;
  slider: SliderProps;
};
