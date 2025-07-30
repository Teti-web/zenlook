import type { LabelProps } from './Label.type';
import { FC } from 'react';

const Label: FC<LabelProps> = ({ text }) => {
  return (
    <span className="text-brand border-brand h-max w-max border-b pb-1.5 text-sm uppercase md:text-lg">{text}</span>
  );
};

export default Label;
