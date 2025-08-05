'use client';

import { FC, useState, useRef, useEffect } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { BoxFeatureProps } from './BoxFeature.type';
import Point from '@/components/atoms/Point/Point';
import TextBox from '../TextBox/TextBox';

const BoxFeature: FC<BoxFeatureProps> = ({ title, description, position, index, allItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ top: position.top.mobile, left: position.left.mobile });
  const ref = useRef(null);

  const { isDesktop, isTablet } = useBreakpoint();

  useEffect(() => {
    if (isDesktop) {
      setCurrentPosition({ top: position.top.desktop, left: position.left.desktop });
    } else if (isTablet) {
      setCurrentPosition({ top: position.top.tablet, left: position.left.tablet });
    } else {
      setCurrentPosition({ top: position.top.mobile, left: position.left.mobile });
    }
  }, [position, isDesktop, isTablet]);

  return (
    <div
      ref={ref}
      className="absolute hidden flex-col items-center justify-center md:flex"
      style={{ top: currentPosition.top, left: currentPosition.left }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Point
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        positionMobile={{ top: position.top.mobile, left: position.left.mobile }}
      />
      <TextBox title={title} description={description} index={index} allItems={allItems} isOpen={isOpen} />
    </div>
  );
};

export default BoxFeature;
