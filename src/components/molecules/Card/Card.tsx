import Heading from '@/components/atoms/Heading/Heading';
import Image from '@/components/atoms/Image/Image';
import { CardProps } from './Card.type';
import { FC } from 'react';

const Card: FC<CardProps> = ({ title, description, decorativeNumber, image, className, decoratorsImage }) => {
  return (
    <div
      className={`${className} border-gradient-red-thin bg-content-inverce/20 flex max-w-[391px] flex-col backdrop-blur-[20px]`}
    >
      <div className="flex flex-col gap-[40px] p-10 md:gap-8">
        <span className="text-secondary font-regular font-sans text-xs leading-[18px] tracking-wider">
          [&nbsp;{decorativeNumber}&nbsp;]
        </span>
        <div className="flex flex-col gap-4">
          <Heading variant="h3" text={title.text} className="text-secondary text-left leading-[44px]" />
          <p className="font-regular body-text">{description}</p>
        </div>
      </div>
      <div className="border-gradient-red-thin-top relative">
        <Image {...image} className="h-full w-full object-cover" />
        {decoratorsImage &&
          decoratorsImage.map((decorator) => (
            <Image
              key={decorator.src}
              {...decorator}
              className={`absolute top-0 left-0 hidden h-[69px] w-[125px] rounded-[12px] object-cover md:block ${decorator.className}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Card;
