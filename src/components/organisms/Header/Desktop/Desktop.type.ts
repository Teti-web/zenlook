import type { ButtonProps } from '@/components/atoms/Button/Button.type';
import type { LinkProps } from '@/components/atoms/Link/Link.type';
import type { ImageProps } from 'next/image';

export type FirstColumn = {
  links: LinkProps[];
};

export type SecondColumn = {
  links: LinkProps[];
  button: ButtonProps;
};

export type DesktopProps = {
  logo: ImageProps;
  firstColumn: FirstColumn;
  secondColumn: SecondColumn;
};
