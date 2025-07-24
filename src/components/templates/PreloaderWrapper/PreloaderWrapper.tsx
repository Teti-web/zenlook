'use client';

import Preloader from '@/components/organisms/Preloader/Preloader';
import { usePageLoad } from '@/hooks/usePageLoad';
import { useState } from 'react';

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

const PreloaderWrapper = ({ children }: PreloaderWrapperProps) => {
  const { isPageLoad, markAsNavigated, isLoading } = usePageLoad();
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    markAsNavigated();
    setShowPreloader(false);
  };

  if (isLoading) {
    return null;
  }

  if (!isPageLoad) {
    return <>{children}</>;
  }

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {!showPreloader && children}
    </>
  );
};

export default PreloaderWrapper;
