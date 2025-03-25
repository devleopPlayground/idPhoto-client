import Button from '@/components/common/button';
import st from './webCameraButtons.module.scss';
import WebcamSkeletonButtonsUi from '@/components/common/skeleton/webcamSkeletonButtonsUi';

type webCameraButtonsProps = {
  isCameraLoading: boolean;
  changeWebcamState: () => void;
  shootPhoto: () => Promise<void>;
  resetPhoto: () => void;
};

const WebCameraButtons = ({
  isCameraLoading,
  changeWebcamState,
  shootPhoto,
  resetPhoto,
}: webCameraButtonsProps) => {
  return (
    <>
      {isCameraLoading ? (
        <WebcamSkeletonButtonsUi />
      ) : (
        <div className={st.container}>
          <Button variant="pink" onClick={shootPhoto}>
            사진 촬영하기
          </Button>
          <Button onClick={resetPhoto}>사진 지우기</Button>
          <Button variant="lightPink" onClick={changeWebcamState}>
            카메라 끄기
          </Button>
        </div>
      )}
    </>
  );
};

export default WebCameraButtons;
