import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { ButtonProps } from '@/components/atoms/Button/Button.type';

export type DescriptionProps = {
  description: string;
  button: ButtonProps;
  title?: HeadingProps;
  boldText?: string;
  variant?: 'primary' | 'secondary';
  isAnimated?: boolean;
};
