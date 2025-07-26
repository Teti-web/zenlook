'use client';

import { useState, useEffect } from 'react';

export const usePageLoad = () => {
  const [isPageLoad, setIsPageLoad] = useState<boolean | null>(null);

  useEffect(() => {
    const checkPageLoad = () => {
      try {
        const navigationCount = sessionStorage.getItem('navigationCount');

        if (!navigationCount) {
          sessionStorage.setItem('navigationCount', '1');
          setIsPageLoad(true);
        } else {
          setIsPageLoad(false);
        }
      } catch (error) {
        console.warn('sessionStorage is not available:', error);
        setIsPageLoad(true);
      }
    };

    checkPageLoad();
  }, []);

  const markAsNavigated = () => {
    setIsPageLoad(false);
  };

  return {
    isPageLoad,
    markAsNavigated,
    isLoading: isPageLoad === null,
  };
};
