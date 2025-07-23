import Heading from '@/components/atoms/Heading/Heading';
import Image from '@/components/atoms/Image/Image';
import { CardProps } from './Card.type';
import { FC } from 'react';

const Card: FC<CardProps> = ({ title, description, decorativeNumber, image, className, decoratorsImage }) => {
  return (
    <div
      className={`${className} flex flex-col  max-w-[391px] border-gradient-red-thin backdrop-blur-[20px] bg-content-inverce/20`}
    >
      <div className="flex flex-col gap-[40px] md:gap-8 p-10">
        <span className="text-secondary font-sans text-xs font-regular leading-[18px] tracking-wider">
          [&nbsp;{decorativeNumber}&nbsp;]
        </span>
        <div className="flex flex-col gap-4">
          <Heading variant="h3" text={title.text} className="text-left text-secondary leading-[44px]" />
          <p className="font-regular body-text">{description}</p>
        </div>
      </div>
      <div className="border-gradient-red-thin-top relative">
        <Image {...image} className="w-full h-full object-cover" />
        {decoratorsImage &&
          decoratorsImage.map((decorator) => (
            <Image
              key={decorator.src}
              {...decorator}
              className={`absolute md:block hidden top-0 left-0 w-[125px] h-[69px] object-cover rounded-[12px] ${decorator.className}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Card;
