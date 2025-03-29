import useAuthStore from '@/stores/useAuthStore';
import useModalStore from '@/stores/useModalStore';
import { useEffect, useState } from 'react';

const useHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { accessToken } = useAuthStore();

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

  return { isSticky, accessToken, openModal, routeMyCollection };
};

export default useHeader;
