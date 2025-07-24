export type ButtonVariant = 'primary' | 'secondary' | 'decorative';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant: ButtonVariant;
  size: ButtonSize;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  isLink?: boolean;
  href?: string;
  className?: string;
};
