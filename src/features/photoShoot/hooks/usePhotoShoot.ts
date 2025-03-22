import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { imageRegex } from '../utils';

const usePhotoShoot = () => {
  const [isCameraLoading, setIsCameraLoading] = useState(true);
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const webcamRef = useRef<Webcam | null>(null);

  const shootPhoto = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) setImageUrl(imageSrc);
  }, [webcamRef]);

  const uploadFile = (files?: FileList | null) => {
    if (!files || files.length === 0) return;

    if (!files[0].name.match(imageRegex)) {
      alert('파일 확장자가 png, jpeg인 사진으로 다시 업로드해주세요.');

      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImageUrl(reader.result);
      }
    };
  };

  const resetPhoto = () => setImageUrl(null);

  const changeWebcamState = () => {
    setIsWebcamOn(!isWebcamOn);
  };

  const onUserMedia = () => {
    setTimeout(() => setIsCameraLoading(false), 200);
  };

  useEffect(() => {
    if (isWebcamOn) {
      setIsCameraLoading(true);
    }
  }, [isWebcamOn]);

  return {
    isCameraLoading,
    isWebcamOn,
    webcamRef,
    imageUrl,
    uploadFile,
    shootPhoto,
    resetPhoto,
    changeWebcamState,
    onUserMedia,
  };
};

export default usePhotoShoot;
