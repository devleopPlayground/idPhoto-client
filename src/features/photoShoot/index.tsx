'use client';

import Button from '@/components/common/button';
import CapturePhoto from './components/capturePhoto';
import TurnOnWebcam from './components/turnOnWebcam';
import UploadImage from './components/uploadImage';
import WebCam from './components/webCamera';
import WebCameraButtons from './components/webCameraButtons';
import usePhotoShoot from './hooks/usePhotoShoot';
import st from './photoShoot.module.scss';
import usePart from './hooks/usePart';

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

  const { part, onClickResultButton } = usePart();

  return (
    <div>
      {part !== 'RESULT' ? (
        <div>
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
            <div className={st.buttonWrapper}>
              <CapturePhoto imageUrl={imageUrl} />
              <Button style={{ maxWidth: '510px' }} onClick={() => onClickResultButton(imageUrl)}>
                다음
              </Button>
            </div>
          )}
        </div>
      ) : (
        <>hi</>
      )}
    </div>
  );
};

export default PhotoShoot;
