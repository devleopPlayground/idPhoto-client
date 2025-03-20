import Button from '@/components/common/button';

type CapturePhotoProps = {
  imageUrl: string;
};

const CapturePhoto = ({ imageUrl }: CapturePhotoProps) => {
  return (
    <div>
      <img src={imageUrl} />
      <Button>다음</Button>
    </div>
  );
};

export default CapturePhoto;
