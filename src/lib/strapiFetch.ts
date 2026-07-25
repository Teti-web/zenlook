import { getStrapiBaseUrl } from '@/helpers/getStrapiUrl';

function getStrapiServerUrl(): string {
  const url = process.env.STRAPI_API_URL || getStrapiBaseUrl();
  return url.replace(/\/$/, '');
}

type StrapiGraphQLOptions = {
  revalidate?: number | false;
  tags?: string[];
};

export async function strapiGraphQL<T>(query: string, options: StrapiGraphQLOptions = {}): Promise<T | null> {
  const { revalidate = 60, tags } = options;
  const endpoint = `${getStrapiServerUrl()}/graphql`;
  const token = process.env.STRAPI_API_TOKEN;

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ query }),
      ...(revalidate === false ? { cache: 'no-store' as const } : { next: { revalidate, tags } }),
    });
  } catch (err) {
    console.error(`[Strapi] Request to ${endpoint} failed:`, err);
    return null;
  }

  if (!res.ok) {
    console.error(`[Strapi] GraphQL request failed: ${res.status} ${res.statusText} (${endpoint})`);
    return null;
  }

  const json = await res.json();

  if (json.errors?.length) {
    for (const { message, path } of json.errors) {
      console.error(`[Strapi GraphQL error]: ${message}${path ? `, Path: ${path}` : ''}`);
    }
  }

  return json.data ?? null;
}
