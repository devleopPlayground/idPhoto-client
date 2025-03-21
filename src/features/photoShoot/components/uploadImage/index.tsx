import Button from '@/components/common/button';
import st from './uploadImage.module.scss';
import { Typography } from '@/components/common';

const UploadImage = () => {
  return (
    <div className={st.container}>
      <Typography>버튼을 향해 사진을 드래그 하거나, 버튼을 클릭하여 사진을 업로드하세요.</Typography>
    </div>
  );
};

export default UploadImage;
