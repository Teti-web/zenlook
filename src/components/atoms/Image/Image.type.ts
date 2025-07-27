export type ImageProps = {
  src: string;
  desktopSrc?: string;
  mobileSrc?: string;
  tabletSrc?: string;
  alt: string;
  width: number;
  height: number;
  widths?: number[];
  quality?: number;
  className?: string;
};
