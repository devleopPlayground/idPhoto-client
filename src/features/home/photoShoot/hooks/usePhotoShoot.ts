import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const usePhotoShoot = () => {
  const [isCameraLoading, setIsCameraLoading] = useState(true);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const webcamRef = useRef<Webcam | null>(null);

  const shootPhoto = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) setImageUrl(imageSrc);
  }, [webcamRef]);

  const resetPhoto = () => setImageUrl(null);

  const changeWebcamState = () => {
    setIsWebcamOn(!isWebcamOn);
  };

  const onUserMedia = () => {
    setIsCameraLoading(false);
  };

  return {
    isCameraLoading,
    isWebcamOn,
    webcamRef,
    imageUrl,
    shootPhoto,
    resetPhoto,
    changeWebcamState,
    onUserMedia,
  };
};

export default usePhotoShoot;
