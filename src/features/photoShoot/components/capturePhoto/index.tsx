import Button from '@/components/common/button';
import st from './capturePhoto.module.scss';

type CapturePhotoProps = {
  imageUrl: string;
};

const CapturePhoto = ({ imageUrl }: CapturePhotoProps) => {
  return (
    <div className={st.container}>
      <img className={st.captureImage} src={imageUrl} />
    </div>
  );
};

export default CapturePhoto;
