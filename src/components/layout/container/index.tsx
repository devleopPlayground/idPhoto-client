import st from './container.module.scss';

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return <div className={st.container}>{children}</div>;
};

export default LayoutContainer;
