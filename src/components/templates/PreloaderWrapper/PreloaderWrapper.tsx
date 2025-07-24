'use client';

import Preloader from '@/components/organisms/Preloader/Preloader';
import { useState } from 'react';

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

const PreloaderWrapper = ({ children }: PreloaderWrapperProps) => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {!showPreloader && children}
    </>
  );
};

export default PreloaderWrapper;
