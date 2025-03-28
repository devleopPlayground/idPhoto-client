'use client';

import useToastStore from '@/stores/useToastStore';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import st from './toast.module.scss';

const ToastPortal = () => {
  const { toasts } = useToastStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [toasts]);

  if (!mounted || toasts.length === 0) return null;

  return createPortal(
    <div className={st.portalContainer}>
      {toasts.map((toast, idx) => (
        <div key={idx} className={st.portalContentWrapper}>
          {toast.content}
        </div>
      ))}
    </div>,
    document.body,
  );
};

export default ToastPortal;
