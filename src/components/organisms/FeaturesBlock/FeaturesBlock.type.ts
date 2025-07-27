import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { CardProps } from '@/components/molecules/Card/Card.type';
import type { LabelProps } from '@/components/atoms/Label/Label.type';

export type FeaturesBlockProps = {
  label: LabelProps;
  title: HeadingProps;
  features: CardProps[];
};
