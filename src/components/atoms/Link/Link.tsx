import { default as NextLink } from 'next/link';
import { FC } from 'react';

import { LinkProps } from './Link.type';
const Link: FC<LinkProps> = ({ href, children, className, variant = 'primary' }) => {
  let linkClasses = ` ${className && className} font-sans text-base leading-1 hover:opacity-70 transition-all duration-300`;

  const linkVariants = {
    primary: 'text-brand',
    secondary: 'text-secondary',
    underline: 'text-brand underline ',
    notice: 'text-notice',
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
