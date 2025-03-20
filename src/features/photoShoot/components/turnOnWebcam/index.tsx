import st from './turnOnWebcam.module.scss';
import Button from '@/components/common/button';

type TurnOnWebcamProps = {
  changeWebcamState: () => void;
};

const TurnOnWebcam = ({ changeWebcamState }: TurnOnWebcamProps) => {
  return (
    <div className={st.container}>
      <div className={st.cameraBox} />
      <Button variant="lightPink" onClick={changeWebcamState}>
        카메라 켜기
      </Button>
    </div>
  );
};

export default TurnOnWebcam;
