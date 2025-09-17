import { BeautyManageTabProps } from '@/components/organisms/BeautyManage/BeautyManage.type';
import { BoxFeatureProps } from '@/components/molecules/BoxFeature/BoxFeature.type';
import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import { SliderProps } from '@/components/molecules/Slider/Slider.type';
import { ButtonProps } from '@/components/atoms/Button/Button.type';
import { CardProps } from '@/components/molecules/Card/Card.type';
import { ImageProps } from '@/components/atoms/Image/Image.type';

export type AnagraphBlock = {
  __typename: 'ComponentAtomsAnagraph';
  id: string;
  anagrahpTitle: string;
  anagrahpDescription: string;
};

export type FeaturesBlock = {
  __typename: 'ComponentMainFeatures';
  id: string;
  label: string;
  title: HeadingProps;
  featuresCards: CardProps[];
};

export type AutoSliderBlock = {
  __typename: 'ComponentMoleculesAutoSlider';
  id: string;
  label: string;
  items: ImageProps[];
};

export type AppointmentBlock = {
  __typename: 'ComponentMainAppointment';
  id: string;
  title: HeadingProps;
  description: string;
  label: string;
  slider: SliderProps;
};

export type BagFeaturesBlock = {
  __typename: 'ComponentMainBagFeatures';
  id: string;
  label: string;
  title: HeadingProps;
  image: ImageProps;
  features: BoxFeatureProps[];
};

export type BeautyManageBlock = {
  __typename: 'ComponentMainBeautyManage';
  id: string;
  title: HeadingProps;
  description: string;
  button?: ButtonProps;
  label?: string;
  tabs: BeautyManageTabProps[];
};

export type CmsBlock =
  | AnagraphBlock
  | FeaturesBlock
  | AutoSliderBlock
  | AppointmentBlock
  | BagFeaturesBlock
  | BeautyManageBlock;
