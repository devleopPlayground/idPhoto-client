import { Typography } from '@/components/common';
import st from './header.module.scss';

const LayoutHeader = () => {
  return (
    <div className={st.container}>
      <Typography className={st.navText}>내 증명사진첩</Typography>
    </div>
  );
};

export default LayoutHeader;
