import { ACCESS_TOKEN } from '@/constants/token';
import useModalStore from '@/stores/useModalStore';
import { LocalStorage } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

const useHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const routeMyCollection = () => {};

  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hasAccessToken = LocalStorage.getItem(ACCESS_TOKEN);

  return { isSticky, hasAccessToken, openModal, routeMyCollection };
};

export default useHeader;
