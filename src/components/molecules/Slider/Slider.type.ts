import { ReviewCardProps } from '../ReviewCard/ReviewCard.types';
import { CardBeautyProps } from '../CardBeauty/CardBeauty.type';

export type SliderProps = {
  items: CardBeautyProps[] | ReviewCardProps[];
  className?: string;
};
