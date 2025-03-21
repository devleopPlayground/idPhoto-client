import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import Typography from '../typography';
import st from './button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'pink' | 'lightPink' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fontVariant?: 'sm' | 'md' | 'lg';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  (
    { children, className, variant = 'white', size = 'lg', fontVariant = 'sm', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={clsx(st.container, st[variant], st[size], st[fontVariant], className)}
        {...props}
        ref={ref}
      >
        <Typography variant={fontVariant}>{children}</Typography>
      </button>
    );
  },
);

export default Button;
