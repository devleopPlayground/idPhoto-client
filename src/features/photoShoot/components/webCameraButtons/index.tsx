import Button from '@/components/common/button';
import st from './webCameraButtons.module.scss';

type webCameraButtonsProps = {
  changeWebcamState: () => void;
  shootPhoto: () => Promise<void>;
  resetPhoto: () => void;
};

const WebCameraButtons = ({ changeWebcamState, shootPhoto, resetPhoto }: webCameraButtonsProps) => {
  return (
    <div className={st.container}>
      <Button variant="pink" onClick={shootPhoto}>
        사진 촬영하기
      </Button>
      <Button onClick={resetPhoto}>사진 지우기</Button>
      <Button variant="lightPink" onClick={changeWebcamState}>
        카메라 끄기
      </Button>
    </div>
  );
};

export default WebCameraButtons;
