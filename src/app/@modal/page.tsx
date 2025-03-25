'use client';

import useStore from '@/hooks/useStore';
import st from './modal.module.scss';
import useModalStore from '@/store/useModalStore';

const LoginModal = () => {
  const isModalOpen = useStore(useModalStore, (state) => state);

  if (!isModalOpen?.isOpen) return null;

  return <div className={st.modalBackground}>sdf</div>;
};

export default LoginModal;
