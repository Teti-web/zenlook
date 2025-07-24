import type { LinkProps } from '@/components/atoms/Link/Link.type';
import type { ImageProps } from 'next/image';

export type MobileProps = {
  logo: ImageProps;
  logoWhite?: ImageProps;
  links: LinkProps[];
  button: LinkProps;
};
