import LayoutAnimatePresence from './animatePresence';
import LayoutContainer from './container';
import LayoutHeader from './header';

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: LayoutContainerProps) => {
  return (
    <LayoutAnimatePresence>
      <LayoutContainer>
        <LayoutHeader />
        {children}
      </LayoutContainer>
    </LayoutAnimatePresence>
  );
};

export default LayoutProvider;
