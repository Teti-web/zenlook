import Label from '@/components/atoms/Label/Label';
import { AnagraphProps } from './Anagraph.type';
import React, { FC } from 'react';

const Anagraph: FC<AnagraphProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <Label text={title} />
      <p className="text-secondary max-w-80 pt-11 text-2xl font-semibold md:max-w-[532px] md:pt-5 md:text-[40px]">
        {description}
      </p>
    </div>
  );
};

export default Anagraph;
