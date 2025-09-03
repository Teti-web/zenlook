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
  widths = [320, 640, 960, 1280, 1920],
  quality = 90,
}) => {
  const [loaded, setLoaded] = useState(false);

  const sizes = `(max-width: 640px) ${widths[0]}px, (max-width: 768px) ${widths[1]}px, (max-width: 1024px) ${widths[2]}px, (max-width: 1280px) ${widths[3]}px, ${widths[4]}px`;

  return (
    <picture className={className}>
      {desktopSrc && <source media="(min-width: 1024px)" srcSet={desktopSrc} type="image/webp" />}
      {tabletSrc && <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={tabletSrc} type="image/webp" />}
      {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />}
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        quality={quality}
        priority={false}
        loading="lazy"
        onLoadingComplete={() => setLoaded(true)}
        className={`transition-all duration-500 ${
          loaded ? 'blur-0 bg-transparent' : 'bg-transparent blur-xs'
        } ${className ? className : ''}`}
      />
    </picture>
  );
};

export default Image;
