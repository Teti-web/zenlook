'use client';

import { LinkProps } from '@/components/atoms/Link/Link.type';
import Loading from '@/components/atoms/Loading/Loading';
import { useQuery } from '@apollo/client/react';
import { FooterProps } from './Footer.type';
import { GET_FOOTER } from './FooterQuery';
import Footer from './Footer';

export const FooterWithQuery = () => {
  const { data, loading, error } = useQuery<{ footer: { links: LinkProps[]; email: string } }>(GET_FOOTER);

  if (loading) return <Loading />;
  if (error) return <div>Error loading footer</div>;
  if (!data) return null;

  const links = data.footer.links.map((link: LinkProps) => ({
    href: link.href,
    children: link.children,
    variant: link.variant ?? undefined,
  }));

  const mail = data.footer.email;

  return <Footer links={links as FooterProps['links']} mail={mail} />;
};
