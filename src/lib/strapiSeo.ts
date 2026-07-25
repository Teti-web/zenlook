import { strapiGraphQL } from '@/lib/strapiFetch';

type DefaultSeo = {
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalURL: string | null;
  shareImage: { url: string | null } | null;
};

const GET_DEFAULT_SEO = `
  query GetDefaultSeo {
    global {
      defaultSeo {
        metaTitle
        metaDescription
        canonicalURL
        shareImage {
          url
        }
      }
    }
  }
`;

export async function fetchDefaultSeo(): Promise<DefaultSeo | null> {
  const data = await strapiGraphQL<{ global: { defaultSeo: DefaultSeo | null } | null }>(GET_DEFAULT_SEO, {
    revalidate: 60,
    tags: ['global'],
  });
  return data?.global?.defaultSeo ?? null;
}
