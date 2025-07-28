'use client';

import { default as NextImage } from 'next/image';
import { ImageProps } from './Image.type';
import { FC, useState } from 'react';

const Image: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  desktopSrc,
  mobileSrc,
  tabletSrc,
  className,
  widths = [320, 640, 960, 1280],
  quality = 75,
}) => {
  const [loaded, setLoaded] = useState(false);

  const sizes = widths.map((w) => `${w}px`).join(', ');

  return (
    <picture className={className}>
      {desktopSrc && <source media={`(min-width:1024px)`} srcSet={desktopSrc} type="image/webp" />}
      {tabletSrc && <source media={`(min-width:768px) and (max-width:1024px)`} srcSet={tabletSrc} type="image/webp" />}
      {mobileSrc && <source media={`(max-width:767px)`} srcSet={mobileSrc} type="image/webp" />}
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        quality={quality}
        onLoadingComplete={() => setLoaded(true)}
        className={`transition-all duration-500 ${loaded ? 'blur-0 bg-transparent' : 'bg-transparent blur-xs'} ${className} `}
      />
    </picture>
  );
};

export default Image;
