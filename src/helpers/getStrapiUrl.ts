/* eslint-disable @typescript-eslint/no-explicit-any */

/** Public Strapi origin (safe for client and server code). */
export function getStrapiBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337').replace(/\/$/, '');
}

export function getStrapiUrl(src: unknown, baseUrl: string): string {
  if (!src) return '';
  if (typeof src === 'string') return src;
  if (typeof src === 'object' && 'url' in (src as any)) {
    return `${baseUrl}${(src as any).url}`;
  }
  return '';
}
