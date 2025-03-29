import LayoutAnimatePresence from './animatePresence';
import LayoutContainer from './container';

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: LayoutContainerProps) => {
  return (
    <LayoutAnimatePresence>
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutAnimatePresence>
  );
};

export default LayoutProvider;
