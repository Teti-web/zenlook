'use client';

import Image from '@/components/atoms/Image/Image';
import { motion, useInView } from 'framer-motion';
import Link from '@/components/atoms/Link/Link';
import { FooterProps } from './Footer.type';
import { FC, useRef } from 'react';
const Footer: FC<FooterProps> = ({ links, description, mail }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer
      className="grid-area-footer border-hover-stroke mx-3 border-x pb-2 md:mx-6 md:w-full lg:mx-auto lg:max-w-[1216px] xl:max-w-[1376px]"
      ref={ref}
    >
      <p className="text-brand font-regular after::block after:bg-hover-stroke w-fit font-sans text-sm uppercase after:mb-2 after:block after:h-[1px] after:w-full md:text-lg">
        Contact us
      </p>
      <p className="text-secondary max-w-80 pt-11 text-2xl font-semibold md:max-w-[532px] md:pt-5 md:text-[40px]">
        {description}
      </p>
      <div className="grid-footer-layout md:pt-8">
        <div className="grid-footer-mail flex w-max flex-col gap-4">
          <Link
            href={`mailto:${mail}`}
            className="text-brand group flex cursor-pointer items-center gap-2 text-lg font-semibold md:text-2xl"
          >
            {mail}
            <Image
              className="-rotate-135 transition-all duration-300 group-hover:scale-125"
              src={'/images/icons/arrow.svg'}
              alt="arrow"
              width={19}
              height={24}
            />
          </Link>
        </div>
        <div className="grid-footer-logo relative mt-7 mb-6 md:mt-20 md:mb-0">
          <Image src={'/images/logo-big.svg'} alt="logo" width={1380} height={360} className="h-auto w-full" />
          <motion.div
            animate={
              isInView
                ? {
                    y: [-8, 12, -8],
                    x: [2, -2, 2],
                    rotate: [-2, 2, -2],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
            className="absolute top-1/2 left-[58.75vw] h-[28.8vw] w-[28.8vw] -translate-y-1/2 md:left-[58.75vw] md:h-[29.38vw] md:w-[29.38vw] lg:left-[57.05vw]"
          >
            <Image src={'/images/gummy-bear-aqua-blue.png'} alt="Gummy Bear Aqua Blue" width={423} height={423} />
          </motion.div>
        </div>
        <div className="grid-footer-links flex flex-row items-center justify-between md:justify-end md:gap-6">
          {links.map((link) => (
            <Link key={link.href} variant="secondary" className="text-base font-medium" href={link.href}>
              {link.children}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between pt-10">
        <p className="font-regular text-notice text-xs leading-5 md:text-sm">Copyright &copy; 2025</p>
        <div className="flex flex-row gap-2">
          <Link variant="notice" className="text-xs leading-5 font-medium md:text-sm" href={'/'}>
            Instagram
          </Link>
          <Link variant="notice" className="text-xs leading-5 font-medium md:text-sm" href={'/'}>
            LinkedIn
          </Link>
          <Link variant="notice" className="text-xs leading-5 font-medium md:text-sm" href={'/'}>
            Meta
          </Link>
          <Link variant="notice" className="text-xs leading-5 font-medium md:text-sm" href={'/'}>
            X
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
