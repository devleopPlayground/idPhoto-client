import { LOGIN, REGISTER } from '@/constants/loginRegister';
import useModalStore from '@/stores/useModalStore';
import { useState } from 'react';

const useModal = () => {
  const isModalOpen = useModalStore((state) => state.isOpen);
  const modalClose = useModalStore((state) => state.closeModal);

  const [loginForm, setLoginForm] = useState(LOGIN);

  const onClickLogin = () => {
    setLoginForm(LOGIN);
  };

  const onClickRegister = () => {
    setLoginForm(REGISTER);
  };

  return { isModalOpen, modalClose, loginForm, onClickLogin, onClickRegister };
};

export default useModal;
