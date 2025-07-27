import { FC } from 'react';
import type { LabelProps } from './Label.type';

const Label: FC<LabelProps> = ({ text }) => {
  return <span className="text-brand border-brand w-max border-b pb-1.5 text-sm uppercase md:text-lg">{text}</span>;
}

export default Label
