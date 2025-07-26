export type LinkVariant = 'primary' | 'secondary' | 'underline' | 'notice';

export type LinkProps = {
  href: string;
  children: React.ReactNode | string;
  className?: string;
  variant?: LinkVariant;
};
