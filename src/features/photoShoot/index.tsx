'use client';

import Button from '@/components/common/button';
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
    uploadFile,
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
      <UploadImage uploadFile={uploadFile} />
      {imageUrl && (
        <>
          <CapturePhoto imageUrl={imageUrl} />
          <Button>다음</Button>
        </>
      )}
    </>
  );
};

export default PhotoShoot;
