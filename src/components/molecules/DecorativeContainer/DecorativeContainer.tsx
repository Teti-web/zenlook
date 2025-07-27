import { DecorativeContainerProps } from './DecorativeContainer.type';
import { FC } from 'react';

const DecorativeContainer: FC<DecorativeContainerProps> = ({ children }) => {
  return (
    <div className="border-hover-stroke relative mt-2 md:border-x md:border-t">
      <span className="bg-hover-stroke absolute top-0 left-[32.36vw] hidden h-full w-[1px] md:block" />
      <span className="bg-hover-stroke absolute top-0 right-[32.36vw] hidden h-full w-[1px] md:block" />
      <div className="flex flex-col gap-5 pt-5 md:gap-10 md:pt-24">{children}</div>
    </div>
  );
};

export default DecorativeContainer;
