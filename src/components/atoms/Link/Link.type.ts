export type LinkVariant = 'primary' | 'secondary' | 'underline';

export type LinkProps = {
  href: string;
  children: React.ReactNode | string;
  className?: string;
  variant?: LinkVariant;
};
