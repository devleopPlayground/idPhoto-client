import st from './animatePresence.module.scss';

type LayoutAnimatePresenceProps = {
  children: React.ReactNode;
};

const LayoutAnimatePresence = ({ children }: LayoutAnimatePresenceProps) => {
  return <div className={st.container}>{children}</div>;
};

export default LayoutAnimatePresence;
