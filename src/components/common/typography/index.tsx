import clsx from 'clsx';
import st from './typography.module.scss';
import { HTMLAttributes } from 'react';

type TypographyProps = {
  children: React.ReactNode;
  variant?: 'sm' | 'md' | 'lg';
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

const Typography = ({ children, variant = 'sm', className, ...props }: TypographyProps) => {
  return (
    <span className={clsx(st[variant], className)} {...props}>
      {children}
    </span>
  );
};

export default Typography;
