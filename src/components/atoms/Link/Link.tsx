import { default as NextLink } from 'next/link';
import { FC } from 'react';

import { LinkProps } from './Link.type';
const Link: FC<LinkProps> = ({ href, children, className, variant = 'primary' }) => {
  let linkClasses = `font-sans text-base leading-1  ${className && className}`;

  const linkVariants = {
    primary: 'text-brand',
    secondary: 'text-secondary',
    underline: 'text-brand underline ',
  };
  if (variant) {
    linkClasses += ` ${linkVariants[variant]}`;
  }
  return (
    <NextLink href={href} className={linkClasses}>
      {children}
    </NextLink>
  );
};

export default Link;
