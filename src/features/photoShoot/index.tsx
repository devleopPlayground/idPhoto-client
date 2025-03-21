'use client';

import CapturePhoto from './components/capturePhoto';
import TurnOnWebcam from './components/turnOnWebcam';
import UploadImage from './components/uploadImage';
import WebCam from './components/webCamera';
import WebCameraButtons from './components/webCameraButtons';
import usePhotoShoot from './hooks/usePhotoShoot';
import st from './photoShoot.module.scss';

const PhotoShoot = () => {
  const {
    isCameraLoading,
    isWebcamOn,
    changeWebcamState,
    webcamRef,
    shootPhoto,
    resetPhoto,
    onUserMedia,
    imageUrl,
  } = usePhotoShoot();

  return (
    <>
      {isWebcamOn ? (
        <div className={st.container}>
          <WebCam webcamRef={webcamRef} isCameraLoading={isCameraLoading} onUserMedia={onUserMedia} />
          <WebCameraButtons
            isCameraLoading={isCameraLoading}
            changeWebcamState={changeWebcamState}
            shootPhoto={shootPhoto}
            resetPhoto={resetPhoto}
          />
        </div>
      ) : (
        <TurnOnWebcam changeWebcamState={changeWebcamState} />
      )}
      <UploadImage />
      {imageUrl && <CapturePhoto imageUrl={imageUrl} />}
    </>
  );
};

export default PhotoShoot;
