import clsx from 'clsx';
import st from './loader.module.scss';

type LoaderProps = {
  size?: 'sm' | 'md' | 'lg';
};

const Loader = ({ size = 'md' }: LoaderProps) => {
  return <div className={clsx(st.container, st[size])}></div>;
};

export default Loader;
