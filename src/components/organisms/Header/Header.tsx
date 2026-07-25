/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ButtonProps, ButtonSize, ButtonVariant } from '@/components/atoms/Button/Button.type';
import { LinkProps, LinkVariant } from '@/components/atoms/Link/Link.type';
import Loading from '@/components/atoms/Loading/Loading';
import React, { FC, useEffect, useState } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useQuery } from '@apollo/client/react';
import { getStrapiBaseUrl } from '@/helpers/getStrapiUrl';
import { GET_HEADER } from './HeaderQuery';
import Desktop from './Desktop/Desktop';
import { ImageProps } from 'next/image';
import Mobile from './Mobile/Mobile';

const Header: FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { isMobile } = useBreakpoint();
  const { data, loading, error } = useQuery<{
    header: {
      logo: ImageProps;
      logoWhite: ImageProps;
      mobileLinks: LinkProps[];
      firstLinks: LinkProps[];
      secondLinks: LinkProps[];
      button: ButtonProps;
    };
  }>(GET_HEADER);

  if (!mounted) return null;
  if (loading) return <Loading />;
  if (error) return <div>Error loading header</div>;
  if (!data) return null;

  const logo = data.header.logo;
  const logoWhite = data.header.logoWhite ?? undefined;

  const baseUrl = getStrapiBaseUrl();
  const logoSrc =
    typeof (logo as any)?.src === 'string' ? (logo as any).src : `${baseUrl}${(logo as any)?.src?.url ?? ''}`;
  const logoWhiteSrc = logoWhite
    ? typeof (logoWhite as any)?.src === 'string'
      ? (logoWhite as any).src
      : `${baseUrl}${(logoWhite as any)?.src?.url ?? ''}`
    : undefined;
  const mobileLinks = data.header.mobileLinks.map((link: LinkProps) => ({
    href: link.href,
    children: link.children,
    variant: link.variant ?? undefined,
  }));
  const firstLinks = data.header.firstLinks.map((link: LinkProps) => ({
    href: link.href,
    children: link.children,
    variant: link.variant ?? undefined,
  }));
  const secondLinks = data.header.secondLinks.map((link: LinkProps) => ({
    href: link.href,
    children: link.children,
    variant: link.variant ?? undefined,
  }));
  const button = data.header.button ?? {
    href: '/book-demo',
    children: 'Book demo',
    variant: 'primary',
  };

  return isMobile ? (
    <Mobile
      logo={{
        src: logoSrc,
        width: (logo as any)?.width ?? undefined,
        height: (logo as any)?.height ?? undefined,
        alt: (logo as any)?.alt,
      }}
      logoWhite={{
        src: logoWhiteSrc as string,
        width: (logoWhite as any)?.width ?? undefined,
        height: (logoWhite as any)?.height ?? undefined,
        alt: (logoWhite as any)?.alt,
      }}
      links={mobileLinks}
      button={{
        href: button.href ?? '',
        children: button.children,
        variant: button.variant as LinkVariant,
      }}
    />
  ) : (
    <Desktop
      logo={{
        src: logoSrc,
        width: (logo as any)?.width ?? undefined,
        height: (logo as any)?.height ?? undefined,
        alt: (logo as any)?.alt,
      }}
      firstColumn={{
        links: firstLinks,
      }}
      secondColumn={{
        links: secondLinks,
        button: {
          size: button.size as ButtonSize,
          href: button.href,
          children: button.children,
          isLink: true,
          variant: button.variant as ButtonVariant,
        },
      }}
    />
  );
};

export default Header;
