'use client';

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
            changeWebcamState={changeWebcamState}
            shootPhoto={shootPhoto}
            resetPhoto={resetPhoto}
          />
        </div>
      ) : (
        <div onClick={changeWebcamState}>tkwlsdmf </div>
      )}
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Screenshot" />
        </div>
      )}
    </>
  );
};

export default PhotoShoot;
