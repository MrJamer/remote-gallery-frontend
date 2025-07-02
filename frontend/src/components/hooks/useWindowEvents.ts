import { useEffect } from 'react';

export const useWindowEvents = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log('Вікно змінено:', window.innerWidth);
    };

    const handleScroll = () => {
      console.log('Скрол:', window.scrollY);
    };

    const handlePopState = () => {
      console.log('URL змінився:', window.location.href);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};
