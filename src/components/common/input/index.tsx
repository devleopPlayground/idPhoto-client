import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import st from './input.module.scss';
import clsx from 'clsx';
import Typography from '../typography';

type InputProps = {
  fontVariant?: 'tn' | 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  inputId?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    { fontVariant = 'tn', inputId, label, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={st.inputWrapper}>
        {label && (
          <label htmlFor={inputId} className={st.label}>
            <Typography variant={fontVariant}>{label}</Typography>
          </label>
        )}
        <input id={inputId} className={clsx(st.input, className)} {...props} ref={ref} />
      </div>
    );
  },
);

export default Input;
