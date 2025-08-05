import Image from '@/components/atoms/Image/Image';
import type { TabProps } from './Tab.type';
import { FC } from 'react';

const Tab: FC<TabProps> = ({ name, content, isActive }) => {
  return (
    <>
      <button
        className={`${isActive ? 'bg-hover-stroke border-hover-stroke border' : 'bg-content-inverce/25 border-none'} md:text-regular text-semibold text-secondary flex items-center justify-center px-4 py-3 backdrop-blur-xl md:px-8 md:py-4 md:text-base`}
      >
        {name}
      </button>
      <div className="absolute h-auto w-full md:top-0 md:right-0">
        <Image {...content} />
      </div>
    </>
  );
};

export default Tab;
