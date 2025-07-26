'use client';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import type { MobileProps } from './Mobile.type';
import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mobile: FC<MobileProps> = ({ logo, logoWhite, links, button }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="grid-area-header border-hover-stroke mx-3 flex flex-row items-center justify-between border-x pt-4">
      <Link href={'/'} className="flex flex-row items-center justify-center">
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
      </Link>
      <button
        className="bg-link inset-shadow-yellow flex h-[44px] w-[44px] items-center justify-center rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars2Icon className="text-brand size-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '200%' }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="bg-brand absolute top-0 left-0 flex h-dvh w-full flex-col justify-between px-3 pt-[56px] pb-8"
          >
            <div className="flex flex-col gap-9">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-row items-center justify-between"
              >
                <Link href={'/'} className="flex flex-row items-center justify-center" onClick={handleLinkClick}>
                  {logoWhite ? (
                    <Image
                      src={logoWhite?.src}
                      alt={logoWhite?.alt}
                      width={logoWhite?.width}
                      height={logoWhite?.height}
                    />
                  ) : (
                    <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                  )}
                </Link>
                <button
                  className="bg-link inset-shadow-yellow flex h-[44px] w-[44px] items-center justify-center rounded-full"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <XMarkIcon className="text-brand size-6" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-col items-start justify-start gap-4"
              >
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    className="flex flex-row items-start justify-start gap-4"
                  >
                    <span className="text-content-inverce font-regular block font-sans text-xs">
                      [&nbsp;0{index + 1}&nbsp;]
                    </span>
                    <Link
                      href={link.href}
                      className="text-gradient-red font-sans text-[44px] leading-none font-bold"
                      onClick={handleLinkClick}
                    >
                      {link.children}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + links.length * 0.1, duration: 0.3 }}
                className="flex flex-row items-start justify-start gap-4"
              >
                <span className="text-content-inverce font-regular block font-sans text-xs">
                  [&nbsp;0{links.length + 1}&nbsp;]
                </span>
                <Link
                  href={button.href}
                  className="text-gradient-shadow-yellow font-sans text-[44px] leading-none font-bold"
                  onClick={handleLinkClick}
                >
                  {button.children}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col items-start justify-start gap-5"
            >
              <p className="text-gradient-red font-sans text-2xl">Follow us on social media</p>
              <div className="flex flex-row items-center justify-center gap-3">
                <Link href={'/'} onClick={handleLinkClick}>
                  <Image src={'/images/icons/instagram.svg'} alt={'instagram'} width={40} height={40} />
                </Link>
                <Link href={'/'} onClick={handleLinkClick}>
                  <Image src={'/images/icons/meta.svg'} alt={'meta'} width={40} height={40} />
                </Link>
                <Link href={'/'} onClick={handleLinkClick}>
                  <Image src={'/images/icons/twitter.svg'} alt={'twitter'} width={40} height={40} />
                </Link>
                <Link href={'/'} onClick={handleLinkClick}>
                  <Image src={'/images/icons/linkedin.svg'} alt={'linkedin'} width={40} height={40} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Mobile;
