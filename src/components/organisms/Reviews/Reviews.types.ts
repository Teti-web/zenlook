import { ReviewCardProps } from '@/components/molecules/ReviewCard/ReviewCard.types';
import { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import { ButtonProps } from '@/components/atoms/Button/Button.type';
import { LabelProps } from '@/components/atoms/Label/Label.type';

export type ReviewsProps = {
  label?: LabelProps;
  title: HeadingProps;
  reviews: ReviewCardProps[];
  button?: ButtonProps;
};
