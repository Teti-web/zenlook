import { HeadingProps } from './Heading.type';
import { FC } from 'react';

const Heading: FC<HeadingProps> = ({ text, variant = 'h2', className = '' }) => {
  const headingClasses = `${className} font-sans text-center`;

  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`${headingClasses} text-gradient-red text-[44px] leading-none font-bold tracking-[-2%] md:text-[112px] md:tracking-normal`}
        >
          {text}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`${headingClasses} text-[44px] font-bold tracking-[-2%] md:text-[80px] md:tracking-normal`}>
          {text}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`${headingClasses} text-2xl font-bold tracking-[-2%] md:text-[40px] md:tracking-normal`}>
          {text}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={`${headingClasses} text-[32px] font-bold tracking-[-2%] md:text-[48px] md:tracking-normal`}>
          {text}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={`${headingClasses} text-[24px] font-bold tracking-[-2%] md:text-[32px] md:tracking-normal`}>
          {text}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={`${headingClasses} text-[20px] font-bold tracking-[-2%] md:text-[24px] md:tracking-normal`}>
          {text}
        </h6>
      );
    default:
      return (
        <h2 className={`${headingClasses} text-[44px] font-bold tracking-[-2%] md:text-[80px] md:tracking-normal`}>
          {text}
        </h2>
      );
  }
};

export default Heading;
