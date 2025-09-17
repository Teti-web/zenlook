/* eslint-disable @typescript-eslint/no-explicit-any */
export function getStrapiUrl(src: unknown, baseUrl: string): string {
  if (!src) return '';
  if (typeof src === 'string') return src;
  if (typeof src === 'object' && 'url' in (src as any)) {
    return `${baseUrl}${(src as any).url}`;
  }
  return '';
}
