import './globals.css';
import { pretendard } from './fonts';
import { generateMetadata } from '@/utils/generateMetadata';
import LayoutProvider from '@/components/layout';

export const metadata = generateMetadata();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable}`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
