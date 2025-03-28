import './globals.css';
import { pretendard } from './fonts';
import { generateMetadata } from '@/utils/generateMetadata';
import LayoutProvider from '@/components/layout';
import TanstackReactQueryProvider from '@/providers/tanstackReactQueryProvider';
import ToastPortal from '@/common/toast/toastPortal';

export const metadata = generateMetadata();

type RootLayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

const RootLayout = ({ children, modal }: RootLayoutProps) => {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable}`}>
        <TanstackReactQueryProvider>
          <LayoutProvider>
            {children}
            {modal}
          </LayoutProvider>
        </TanstackReactQueryProvider>
        <ToastPortal />
      </body>
    </html>
  );
};

export default RootLayout;
