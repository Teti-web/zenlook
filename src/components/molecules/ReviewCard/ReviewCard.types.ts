import { ImageProps } from '@/components/atoms/Image/Image.type';

export type BackgroundColor = 'peach' | 'pink' | 'orange' | 'yellow' | 'red';

export type ReviewCardProps = {
  text: string;
  author: string;
  image: ImageProps;
  backgroundColor: BackgroundColor;
};
