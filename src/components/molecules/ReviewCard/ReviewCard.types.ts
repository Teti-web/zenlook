import { ImageProps } from '@/components/atoms/Image/Image.type';
import type { MotionValue } from 'framer-motion';

export type BackgroundColor = 'peach' | 'pink' | 'orange' | 'yellow' | 'red';

export type ReviewCardProps = {
  i?: number;
  progress?: MotionValue<number>;
  range?: [number, number];
  targetScale?: number;
  text: string;
  author: string;
  image: ImageProps;
  backgroundColor: BackgroundColor;
};
