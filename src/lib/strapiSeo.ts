type DefaultSeo = {
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalURL: string | null;
  shareImage: { url: string | null } | null;
};

export async function fetchDefaultSeo(): Promise<DefaultSeo | null> {
  const endpoint = `${(process.env.STRAPI_API_URL || 'http://localhost:1337').replace(/\/$/, '')}/graphql`;
  const token = process.env.STRAPI_API_TOKEN;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },

    body: JSON.stringify({
      query: `
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
      `,
    }),

    cache: 'no-store',
  });

  if (!res.ok) return null;
  const json = await res.json();
  return json?.data?.global?.defaultSeo ?? null;
}
