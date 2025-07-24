'use client';

import { useState, useEffect } from 'react';

export const useNavigationType = () => {
  const [isPageLoad, setIsPageLoad] = useState<boolean | null>(null);

  useEffect(() => {
    const detectNavigationType = () => {
      try {
        // Використовуємо Navigation API для точного визначення
        if (typeof window !== 'undefined') {
          // Перевіряємо тип навігації
          const navigation = window.performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

          if (navigation) {
            const navigationType = navigation.type;

            // 'reload' = F5, 'navigate' = пряме введення URL, 'back_forward' = кнопки назад/вперед
            const isActualPageLoad = navigationType === 'reload' || navigationType === 'navigate';
            setIsPageLoad(isActualPageLoad);
          } else {
            // Fallback для старих браузерів
            const isReload = window.performance?.navigation?.type === 1; // TYPE_RELOAD
            setIsPageLoad(isReload || !sessionStorage.getItem('hasNavigated'));
          }

          // Позначаємо що була навігація в цій сесії
          sessionStorage.setItem('hasNavigated', 'true');
        }
      } catch (error) {
        console.warn('Navigation detection failed:', error);
        setIsPageLoad(true); // Fallback
      }
    };

    detectNavigationType();
  }, []);

  return {
    isPageLoad,
    isLoading: isPageLoad === null,
  };
};
