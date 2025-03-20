'use client';

import { Typography } from '@/components/common';
import st from './header.module.scss';
import useHeader from './hooks/useHeader';
import clsx from 'clsx';

const LayoutHeader = () => {
  const { isSticky } = useHeader();

  return (
    <div className={clsx(st.container, isSticky && st.visible)}>
      <Typography className={st.navText}>내 증명사진첩</Typography>
    </div>
  );
};

export default LayoutHeader;
