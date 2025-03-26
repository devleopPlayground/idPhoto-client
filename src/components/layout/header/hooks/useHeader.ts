import useModalStore from '@/store/useModalStore';
import { useCallback, useEffect, useState } from 'react';

const useHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isSticky, openModal };
};

export default useHeader;
