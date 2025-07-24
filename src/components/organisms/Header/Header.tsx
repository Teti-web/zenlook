'use client';

import { useBreakpoint } from '@/hooks/useBreakpoint';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';
import React, { FC } from 'react';

export const Header: FC = () => {
  const { isMobile } = useBreakpoint();

  return isMobile ? (
    <Mobile
      logo={{
        src: '/images/logo.svg',
        width: 154,
        height: 34,
        alt: 'logo',
      }}
      logoWhite={{
        src: '/images/logo-white.svg',
        width: 154,
        height: 34,
        alt: 'logo-white',
      }}
      links={[
        {
          href: '/features',
          children: 'Features',
          variant: 'primary',
        },
        {
          href: '/pricing',
          children: 'Pricing',
          variant: 'primary',
        },
        {
          href: '/who-loves-us',
          children: 'Who loves us',
          variant: 'primary',
        },
        {
          href: '/success-stories',
          children: 'Success stories',
          variant: 'primary',
        },
        {
          href: '/blog',
          children: 'Blog',
          variant: 'primary',
        },
      ]}
      button={{
        href: '/book-demo',
        children: 'Book demo',
        variant: 'primary',
      }}
    />
  ) : (
    <Desktop
      logo={{
        src: '/images/logo.svg',
        width: 104,
        height: 24,
        alt: 'logo',
      }}
      firstColumn={{
        links: [
          {
            href: '/features',
            children: 'Features',
            variant: 'primary',
          },
          {
            href: '/pricing',
            children: 'Pricing',
            variant: 'primary',
          },
          {
            href: '/who-loves-us',
            children: 'Who loves us',
            variant: 'primary',
          },
        ],
      }}
      secondColumn={{
        links: [
          {
            href: '/success-stories',
            children: 'Success stories',
            variant: 'primary',
          },
          {
            href: '/blog',
            children: 'Blog',
            variant: 'primary',
          },
        ],
        button: {
          children: 'Book demo',
          isLink: true,
          variant: 'secondary',
          size: 'small',
          label: 'Book demo',
          href: '/book-demo',
        },
      }}
    />
  );
};
