import type { ReviewCardProps } from './ReviewCard.types';
import Image from '@/components/atoms/Image/Image';
import { FC } from 'react';

const ReviewCard: FC<ReviewCardProps> = ({ text, author, image, backgroundColor }) => {
  let cardColor = '';
  switch (backgroundColor) {
    case 'peach':
      cardColor = 'bg-gradient-red-blur';
      break;
    case 'pink':
      cardColor = 'bg-gradient-red';
      break;
    case 'orange':
      cardColor = 'bg-gradient-red';
      break;
    case 'yellow':
      cardColor = 'bg-gradient-yellow';
      break;
    case 'red':
      cardColor = 'bg-gradient-red-blur';
      break;
    default:
      cardColor = 'bg-gradient-red';
      break;
  }
  return (
    <div
      className={
        cardColor + ' flex w-full flex-col gap-5 p-4 md:flex-row-reverse md:items-center md:justify-between md:p-8'
      }
    >
      <Image {...image} className="aspect-square" />
      <div className="flex flex-col gap-5 md:max-w-[852px]">
        <p className="text-content-inverce text-left font-sans text-2xl leading-7 font-semibold md:max-w-[784px] md:text-center md:text-[40px] md:leading-11">
          {text}
        </p>
        <p className="text-content-inverce font-regular text-left font-sans text-sm md:text-center md:text-lg">
          {author}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
