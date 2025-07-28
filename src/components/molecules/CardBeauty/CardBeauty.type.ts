import { ImageProps } from '@/components/atoms/Image/Image.type';

export type Variants = 'beauty-professional' | 'beauty-manage' | 'beauty-benefits';

export type PersonalInfo = {
  name: string;
  profesional: string;
  description: string;
  rating: number;
  progress: string;
};

export type CardBeautyProps = {
  image: ImageProps;
  variant: Variants;
  title?: string;
  description?: string;
  personalInfo?: PersonalInfo;
};
