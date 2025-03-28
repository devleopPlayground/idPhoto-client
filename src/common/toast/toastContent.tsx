import clsx from 'clsx';
import st from './toast.module.scss';
import { Typography } from '@/components/common';

type ToastContentProps = {
  content: string;
  type?: 'success' | 'error';
};

const ToastContent = ({ content, type = 'success' }: ToastContentProps) => {
  return (
    <div className={clsx(st.contentContainer, st[type])}>
      <Typography>
        {content} {type === 'success' ? '🎉' : '😢'}
      </Typography>
    </div>
  );
};

export default ToastContent;
