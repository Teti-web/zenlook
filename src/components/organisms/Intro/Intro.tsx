import Description from '@/components/molecules/Description/Description';
import type { IntroProps } from './Intro.type';
import { FC } from 'react';
import Image from '@/components/atoms/Image/Image';

const Intro: FC<IntroProps> = ({ description, label }) => {
  return (
    <section className=" ">
        <div className='border-hover-stroke relative mt-2 h-dvh 2xl:h-[80dvh]  md:border'>
      <span className="bg-hover-stroke absolute top-0 left-[32.36vw] hidden h-full w-[1px] md:block" />
      <span className="bg-hover-stroke absolute top-0 right-[32.36vw] hidden h-full w-[1px] md:block" />
      <div className='flex flex-col w-full max-w-[930px] justify-center items-center gap-4 absolute top-32 left-1/2 -translate-x-1/2 z-10'>
        {label && <span className='text-brand uppercase w-max border-b border-brand pb-1.5 text-sm md:text-lg'>{label}</span>}
        <Description {...description} variant='secondary' />
      </div>
      </div>
      <Image src="/images/intro/decorator-1.png" alt="decorator-1" width={417} height={537} quality={100} className='absolute top-120 left-[-3.59px] w-60 h-auto md:w-[417px] md:top-[356.79px] md:left-[-3px] ' />
      <Image src="/images/intro/decorator-2.png" mobileSrc="/images/intro/decorator-2-mobile.png" tabletSrc="/images/intro/decorator-2-mobile.png" alt="decorator-2" width={344} height={344} quality={100} className='absolute top-3 left-[-3.59px] w-32 h-auto lg:w-[344px] lg:top-[-3px] lg:left-[250px] ' />
      <Image src="/images/intro/decorator-3.png" alt="decorator-3" width={322} height={373} quality={100} className='absolute top-20 right-[-32.59px] w-28 h-auto md:w-[322px] md:top-[141px] md:right-[46px] z-2  ' />
      <Image src="/images/intro/decorator-4.png" alt="decorator-4" width={214} height={214} quality={100} className='absolute top-132 right-4 w-20 h-auto md:w-[214px] md:top-[641px] md:right-[358px] z-2 ' />
    </section>
  );
};

export default Intro;
