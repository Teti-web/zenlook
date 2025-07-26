import type { DescriptionProps } from './Description.type';
import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import { FC } from 'react';

const Description: FC<DescriptionProps> = ({ description, button, title, boldText, variant = 'primary' }) => {
  const variantClass =
    variant === 'primary'
      ? 'flex-col md:flex-row items-start md:justify-start'
      : 'flex-col items-center justify-center';
  return (
    <div className={`my-10 flex gap-5 md:gap-10 xl:gap-20 ${variantClass}`}>
      {title && <Heading {...title} />}
      {boldText && <p className="text-secondary text-2xl font-semibold md:max-w-[835px] md:text-[40px]">{boldText}</p>}
      <div className="flex flex-col gap-10 md:max-w-[380px] md:gap-7">
        <p className="body-text">{description}</p>
        {button && <Button {...button} />}
      </div>
    </div>
  );
};

export default Description;
