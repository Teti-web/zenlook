import PreloaderWrapper from '@/components/templates/PreloaderWrapper/PreloaderWrapper';
import { FooterWithQuery } from '@/components/organisms/Footer/FooterWithQuery';
import { ProviderAppolo } from '@/providers/providerApollo';
import Header from '@/components/organisms/Header/Header';
import { getStrapiBaseUrl } from '@/helpers/getStrapiUrl';
import { fetchDefaultSeo } from '@/lib/strapiSeo';
import { Rethink_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const rethinkSans = Rethink_Sans({
  variable: '--font-rethink-sans',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchDefaultSeo();
  const baseUrl = getStrapiBaseUrl();

  return {
    title: seo?.metaTitle ?? 'Zenlook',
    description: seo?.metaDescription ?? undefined,
    alternates: seo?.canonicalURL ? { canonical: seo.canonicalURL } : undefined,
    openGraph: seo
      ? {
          title: seo.metaTitle ?? undefined,
          description: seo.metaDescription ?? undefined,
          images: seo.shareImage?.url ? [{ url: `${baseUrl}${seo.shareImage.url}` }] : undefined,
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethinkSans.variable} grid-areas-layout grid h-dvh grid-cols-1 grid-rows-[auto_1fr_auto] antialiased`}
      >
        <ProviderAppolo>
          <PreloaderWrapper>
            <Header />
            <main className="border-hover-stroke grid-area-main mx-3 border-x md:mx-6 md:w-full md:border-none lg:mx-auto lg:max-w-[1216px] xl:max-w-[1376px]">
              {children}
            </main>
            <FooterWithQuery />
          </PreloaderWrapper>
        </ProviderAppolo>
      </body>
    </html>
  );
}
