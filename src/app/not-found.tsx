'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import Label from '@/components/atoms/Label/Label';
import Image from '@/components/atoms/Image/Image';
import { motion } from 'framer-motion';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const DYN = { minBottom: 2, maxBottom: 32, jitter: 8, maxSize: 557, minSize: 288 } as const;

  const USE_FIXED_LAYOUT = true;
  const fixedLayoutBySrc = useMemo(
    () =>
      ({
        '/images/not-found/not-found-1.png': { leftPct: -3, bottomVh: -4, size: 344, rotate: -26, z: 140 },
        '/images/not-found/not-found-13.png': { leftPct: -5, bottomVh: 26, size: 314, rotate: -2, z: 135 },
        '/images/not-found/not-found-12.png': { leftPct: 2, bottomVh: 22, size: 342, rotate: 0, z: 136 },
        '/images/not-found/not-found-2.png': { leftPct: 14, bottomVh: -5, size: 435, rotate: -38, z: 137 },
        '/images/not-found/not-found-3.png': { leftPct: 17, bottomVh: -18, size: 302, rotate: 128, z: 141 },
        '/images/not-found/not-found-6.png': { leftPct: 36, bottomVh: -8, size: 260, rotate: 0, z: 142 },
        '/images/not-found/not-found-7.png': { leftPct: 52, bottomVh: -2, size: 176, rotate: -22, z: 143 },
        '/images/not-found/not-found-8.png': { leftPct: 60, bottomVh: -6, size: 313, rotate: -10, z: 144 },
        '/images/not-found/not-found-10.png': { leftPct: 56, bottomVh: 11, size: 352, rotate: 22, z: 130 },
        '/images/not-found/not-found-4.png': { leftPct: 74, bottomVh: 19, size: 290, rotate: -25, z: 131 },
        '/images/not-found/not-found-9.png': { leftPct: 82, bottomVh: 0, size: 407, rotate: 15, z: 132 },
        '/images/not-found/not-found-5.png': { leftPct: 77, bottomVh: -5, size: 245, rotate: 87, z: 138 },
        '/images/not-found/not-found-11.png': { leftPct: 90, bottomVh: 2, size: 185, rotate: -30, z: 134 },
        '/images/not-found/not-found-14.png': { leftPct: 78, bottomVh: 9, size: 216, rotate: 12, z: 134 },
      }) as Record<string, { leftPct?: number; bottomVh?: number; size?: number; rotate?: number; z?: number }>,
    [],
  );

  const images = useMemo(
    () => [
      {
        src: '/images/not-found/not-found-1.png',
        alt: 'An open jar of light peach-colored cream with a green base and a rose gold lid, shown against a white background.',
      },
      {
        src: '/images/not-found/not-found-2.png',
        alt: 'A circular object made of thick, shiny green coils arranged in a ring shape, resembling a large spiral or spring.',
      },
      {
        src: '/images/not-found/not-found-3.png',
        alt: 'Elegant round perfume bottle with pink liquid, gold flecks, and a peachy spherical cap.',
      },
      { src: '/images/not-found/not-found-4.png', alt: '' },
      { src: '/images/not-found/not-found-5.png', alt: '' },
      { src: '/images/not-found/not-found-6.png', alt: '' },
      { src: '/images/not-found/not-found-7.png', alt: '' },
      { src: '/images/not-found/not-found-8.png', alt: '' },
      { src: '/images/not-found/not-found-9.png', alt: '' },
      { src: '/images/not-found/not-found-10.png', alt: '' },
      { src: '/images/not-found/not-found-11.png', alt: '' },
      { src: '/images/not-found/not-found-12.png', alt: '' },
      { src: '/images/not-found/not-found-13.png', alt: '' },
      { src: '/images/not-found/not-found-14.png', alt: '' },
    ],
    [],
  );

  const imagesShuffled = useMemo(() => {
    if (!mounted) return images;
    const arr = [...images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [images, mounted]);

  const imagesList = useMemo(
    () => (USE_FIXED_LAYOUT ? images : imagesShuffled),
    [USE_FIXED_LAYOUT, images, imagesShuffled],
  );

  const randoms = useMemo(() => {
    const n = imagesList.length;
    return Array.from({ length: n }, () => ({
      jitter: (Math.random() * 2 - 1) * (DYN.jitter / 2),
      floatX: 3 + Math.random() * 5,
      floatY: 2 + Math.random() * 5,
      delayDrop: Math.random() * 0.25,
      floatDur: 5 + Math.random() * 3,
      yStart: -200 - Math.random() * 200,
      rotate: Math.floor(-18 + Math.random() * 36),
    }));
  }, [imagesList.length, DYN.jitter]);

  const params = useMemo(() => {
    if (USE_FIXED_LAYOUT) {
      return imagesList.map((_, idx) => {
        const src = imagesList[idx]?.src as string | undefined;
        const o = src ? fixedLayoutBySrc[src] : undefined;
        return {
          size: o?.size ?? 344,
          leftPct: o?.leftPct ?? 0,
          bottomVh: o?.bottomVh ?? 0,
          rotate: o?.rotate ?? 0,
          delayDrop: 0.1,
          floatDur: 6,
          floatDelay: 0.8,
          floatX: 4,
          floatY: 3,
          yStart: -220,
          z: o?.z ?? 10,
        } as const;
      });
    }

    const n = imagesList.length;
    return imagesList.map((_, idx) => {
      const slot = n > 1 ? (idx / (n - 1)) * 100 : 50;
      const leftPct = clamp(slot + randoms[idx].jitter, -8, 108);

      const xNorm = clamp(leftPct / 100, 0, 1);
      const u = 2 * xNorm - 1;
      const edgeRaw = 1 - Math.sqrt(Math.max(0, 1 - u * u));
      const edgeFactor = Math.pow(edgeRaw, 1.4);

      const baseBottom = lerp(DYN.minBottom, DYN.maxBottom, edgeFactor);
      const edgeAnchorChance = 0.15 + edgeFactor * 0.15;
      const bottomVh =
        Math.random() < edgeAnchorChance
          ? 0.5 + Math.random() * 2.2
          : clamp(baseBottom - edgeFactor * (2 + Math.random() * 3), 0.5, 100);

      const edgeSizeFactor = 0.5 + 0.25 * edgeFactor;
      let size = Math.floor(lerp(DYN.minSize, DYN.maxSize, edgeSizeFactor) + (Math.random() * 16 - 8));
      if (xNorm < 0.12 || xNorm > 0.88) size = DYN.maxSize;

      return {
        size,
        leftPct,
        bottomVh,
        rotate: randoms[idx].rotate,
        delayDrop: randoms[idx].delayDrop,
        floatDur: randoms[idx].floatDur,
        floatDelay: randoms[idx].delayDrop + 0.6,
        floatX: randoms[idx].floatX,
        floatY: randoms[idx].floatY,
        yStart: randoms[idx].yStart,
        z: 100 + Math.floor(size / 10),
      } as const;
    });
  }, [USE_FIXED_LAYOUT, imagesList, randoms, DYN.minBottom, DYN.maxBottom, DYN.minSize, DYN.maxSize, fixedLayoutBySrc]);
  return (
    <div className="relative flex h-screen flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center gap-8 pt-14 md:gap-12 md:pt-20">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <Label text="Oops! 404 Error!" />
          <Heading text="Page Not Found" variant="h1" />
        </div>
        <Button variant="primary" size="medium" isLink href="/" label="Back to Home">
          Back to Home
        </Button>
      </div>
      <div className="pointer-events-none absolute right-0 bottom-[8vh] left-0 h-[80vh] md:h-[50vh] md:overflow-visible">
        {mounted &&
          imagesList.map((img, i) => (
            <motion.div
              key={img.src}
              animate={{
                x: [0, params[i].floatX, 0, -params[i].floatX * 0.6, 0],
                y: [0, -params[i].floatY, 0, params[i].floatY * 0.6, 0],
              }}
              transition={{
                duration: params[i].floatDur,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: params[i].floatDelay,
              }}
              className="absolute"
              style={{
                bottom: `${params[i].bottomVh}vh`,
                left: `${params[i].leftPct}%`,
                rotate: params[i].rotate,
                zIndex: params[i].z,
                width: params[i].size,
                height: params[i].size,
              }}
            >
              <motion.div
                initial={{ y: params[i].yStart, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22, delay: params[i].delayDrop }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={params[i].size}
                  height={params[i].size}
                  widths={[params[i].size, params[i].size, params[i].size, params[i].size, params[i].size]}
                />
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
