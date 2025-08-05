import type { BoxFeatureProps } from '@/components/molecules/BoxFeature/BoxFeature.type';
import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { LabelProps } from '@/components/atoms/Label/Label.type';
import { ImageProps } from '@/components/atoms/Image/Image.type';

export type BagFeaturesProps = {
  label: LabelProps;
  title: HeadingProps;
  features: Omit<BoxFeatureProps, 'allItems' | 'index'>[];
  image: ImageProps;
};
