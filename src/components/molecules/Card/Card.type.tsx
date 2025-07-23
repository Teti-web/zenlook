import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { ImageProps } from '@/components/atoms/Image/Image.type';

export type CardProps = {
  title: HeadingProps;
  description: string;
  decorativeNumber: string;
  image: ImageProps;
  decoratorsImage?: ImageProps[];
  className?: string;
};
