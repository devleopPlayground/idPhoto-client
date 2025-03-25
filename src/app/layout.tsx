import './globals.css';
import { pretendard } from './fonts';
import { generateMetadata } from '@/utils/generateMetadata';
import LayoutProvider from '@/components/layout';

export const metadata = generateMetadata();

type RootLayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

const RootLayout = ({ children, modal }: RootLayoutProps) => {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable}`}>
        <LayoutProvider>{children}</LayoutProvider>
        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
