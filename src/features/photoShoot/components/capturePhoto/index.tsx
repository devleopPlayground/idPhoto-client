import Button from '@/components/common/button';
import st from './capturePhoto.module.scss';

type CapturePhotoProps = {
  imageUrl: string;
};

const CapturePhoto = ({ imageUrl }: CapturePhotoProps) => {
  return (
    <div className={st.container}>
      <img className={st.captureImage} src={imageUrl} />
      <Button>다음</Button>
    </div>
  );
};

export default CapturePhoto;
