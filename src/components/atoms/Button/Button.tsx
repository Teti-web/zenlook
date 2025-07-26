import { ButtonProps } from './Button.type';
import Link from 'next/link';
import { FC } from 'react';

const Button: FC<ButtonProps> = ({
  children,
  isLink,
  href = '',
  variant = 'primary',
  size = 'medium',
  label,
  disabled,
  onClick,
  className,
}) => {
  let buttonClasses = `border-0 flex items-center justify-center rounded-full cursor-pointer transition-all duration-500  ${className}`;

  const buttonVariants = {
    primary: 'bg-brand text-content-inverce inset-shadow-red hover:inset-shadow-red-hover',
    secondary: 'bg-link text-secondary inset-shadow-yellow hover:inset-shadow-yellow-hover',
    decorative:
      'bg-transparent text-brand inset-shadow-light-pink hover:inset-shadow-light-pink-hover border-gradient-red-thin',
  };

  if (variant) {
    buttonClasses += ` ${buttonVariants[variant]}`;
  }

  const buttonSizes = {
    small: 'text-base font-medium px-[40px] py-[16px] md:px-[32px] md:py-[16px]',
    medium: 'text-base font-medium px-[64px] py-[22px] md:text-xl md:px-[78.5px] md:py-[34px]',
    large: 'text-lg',
  };

  if (size) {
    buttonClasses += ` ${buttonSizes[size]}`;
  }

  if (isLink) {
    return (
      <Link href={href} aria-label={label} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
