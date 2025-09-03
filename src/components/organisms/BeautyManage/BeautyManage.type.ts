import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { ButtonProps } from '@/components/atoms/Button/Button.type';
import type { LabelProps } from '@/components/atoms/Label/Label.type';
import type { TabProps } from '@/components/molecules/Tab/Tab.type';

export type BeautyManageTabProps = Omit<TabProps, 'isActive'>;

export type BeautyManageProps = {
  title: HeadingProps;
  description: string;
  tabs: BeautyManageTabProps[];
  button?: ButtonProps;
  label?: LabelProps;
};
