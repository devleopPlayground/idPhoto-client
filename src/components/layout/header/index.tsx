'use client';

import { Typography } from '@/components/common';
import st from './header.module.scss';
import useHeader from './hooks/useHeader';
import clsx from 'clsx';
import useStore from '@/hooks/useStore';
import useModalStore from '@/store/useModalStore';

const LayoutHeader = () => {
  const { isSticky } = useHeader();
  const ModalOpen = useStore(useModalStore, (state) => state);

  return (
    <div onClick={ModalOpen?.openModal} className={clsx(st.container, isSticky && st.visible)}>
      <Typography className={st.navText}>내 증명사진첩</Typography>
    </div>
  );
};

export default LayoutHeader;
