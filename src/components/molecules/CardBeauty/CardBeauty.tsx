import { CardBeautyProps } from './CardBeauty.type';
import Image from '@/components/atoms/Image/Image';
import { FC } from 'react';

const CardBeauty: FC<CardBeautyProps> = ({ image, variant, title, description, personalInfo }) => {
  const cardClassName = 'relative flex h-[300px] max-w-[230px] flex-col md:h-[512px] md:max-w-[450px]';

  switch (variant) {
    case 'beauty-professional':
      return (
        <div className={cardClassName}>
          <Image {...image} className="h-full w-full object-cover" />
          {personalInfo && (
            <div className="bg-content-inverce/20 absolute right-3 bottom-3 flex max-w-[137px] flex-col items-start justify-center gap-2 rounded-lg p-2 drop-shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] backdrop-blur-xl md:right-6 md:bottom-6 md:max-w-[245px] md:gap-3 md:rounded-xl md:p-3">
              <div className="flex flex-col">
                <p className="text-content-inverce font-sans text-xs font-semibold md:text-2xl">{personalInfo.name}</p>
                <p className="text-content-inverce/60 font-regular font-sans text-[10px] tracking-wider md:text-sm">
                  {personalInfo.profesional}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-content-inverce font-regular font-sans text-[8px] leading-none tracking-wider md:text-sm">
                  {personalInfo.description}
                </p>
                <div className="flex flex-row items-center gap-1 md:gap-2">
                  <p className="text-content-inverce font-sans text-[9px] leading-none font-semibold tracking-wider md:text-lg">
                    {personalInfo.rating}
                  </p>
                  <p className="text-green font-regular font-sans text-[6px] leading-none tracking-wider md:text-xs">
                    {personalInfo.progress}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    case 'beauty-manage':
      return (
        <div
          className={`${cardClassName} bg-gradient-red-blur gap-4 overflow-hidden px-4 pt-4 md:gap-6 md:px-8 md:pt-8`}
        >
          <div className="flex flex-col gap-1.5 md:gap-3">
            <p className="text-content-inverce font-sans text-base leading-none font-semibold md:text-2xl">{title}</p>
            <p className="text-content-inverce font-regular font-sans text-[10px] md:max-w-[275px] md:text-sm">
              {description}
            </p>
          </div>
          <Image {...image} className="h-full w-full rounded-t-2xl object-cover" />
        </div>
      );
    case 'beauty-benefits':
      return (
        <div className={cardClassName}>
          <Image {...image} className="h-full w-full object-cover" />
          <div className="border-content-inverce absolute top-3 left-3 flex h-[90%] w-[90%] flex-col items-start justify-end gap-4 rounded-xl border p-3 md:top-7 md:left-7 md:max-h-[471px] md:max-w-[390px] md:gap-6 md:rounded-2xl md:p-4">
            <p className="text-content-inverce font-sans text-sm leading-none font-semibold md:text-2xl">{title}</p>
            <p className="text-content-inverce font-regular font-sans text-[10px] tracking-wider md:max-w-[270px] md:text-sm">
              {description}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default CardBeauty;
