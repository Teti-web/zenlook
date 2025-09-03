import type { ImageProps } from '@/components/atoms/Image/Image.type';
import { ReactNode } from 'react';
export type TabProps = {
  name: string;
  content: ImageProps | ReactNode;
  isActive: boolean;
  onClick?: () => void;
};
