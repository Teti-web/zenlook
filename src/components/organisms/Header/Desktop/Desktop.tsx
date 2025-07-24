import Button from '@/components/atoms/Button/Button';
import type { DesktopProps } from './Desktop.type';
import Link from '@/components/atoms/Link/Link';
import Image from 'next/image';
import { FC } from 'react';

const Desktop: FC<DesktopProps> = ({ logo, firstColumn, secondColumn }) => {
  return (
    <header className="grid-area-header flex flex-row items-center justify-between pt-2.5 md:px-6 lg:px-0 lg:max-w-[1216px] xl:max-w-[1376px] w-full mx-auto">
      <div className="flex flex-row items-center justify-start gap-4">
        {firstColumn.links.map((link) => (
          <Link className="font-medium" key={link.href} {...link} />
        ))}
      </div>
      <Link href="/">
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
      </Link>
      <div className="flex flex-row items-center justify-start gap-4">
        {secondColumn.links.map((link) => (
          <Link className="font-medium" key={link.href} {...link} />
        ))}
        <Button {...secondColumn.button} className="ml-2.5" />
      </div>
    </header>
  );
};

export default Desktop;
