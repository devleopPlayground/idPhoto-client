import st from './webCameraButtons.module.scss';

type webCameraButtonsProps = {
  changeWebcamState: () => void;
  shootPhoto: () => Promise<void>;
  resetPhoto: () => void;
};

const WebCameraButtons = ({ changeWebcamState, shootPhoto, resetPhoto }: webCameraButtonsProps) => {
  return (
    <div className={st.container}>
      <button className={st.shootPhoto} onClick={shootPhoto}>
        사진 촬영하기
      </button>
      <button className={st.resetPhoto} onClick={resetPhoto}>
        사진 지우기
      </button>
      <button className={st.resetPhoto} onClick={changeWebcamState}>
        카메라 끄기
      </button>
    </div>
  );
};

export default WebCameraButtons;
