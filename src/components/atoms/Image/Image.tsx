import { default as NextImage } from 'next/image';
import { ImageProps } from './Image.type';
import { FC } from 'react';

const Image: FC<ImageProps> = ({ src, alt, width, height, desktopSrc, mobileSrc, widths = [320, 640, 960, 1280], quality = 75, ...rest }) => {
  const sizes = widths.map((w) => `${w}px`).join(', ');

  return (
    <picture>
      {desktopSrc && <source
        media={`(min-width:768px)`}
        srcSet={desktopSrc}
        type="image/webp"
      />}
      {mobileSrc && <source
        media={`(max-width:767px)`}
        srcSet={mobileSrc}
        type="image/webp"
      />}
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        quality={quality}
        {...rest}
      />
    </picture>
  );
};

export default Image;
