import { MutableRefObject } from 'react';
import Webcam from 'react-webcam';
import { videoConstraints } from '@/features/home/photoShoot/utils';

type WebCameraProps = {
  webcamRef: MutableRefObject<Webcam | null>;
};

const WebCamera = ({ webcamRef }: WebCameraProps) => {
  return (
    <Webcam
      style={{ borderRadius: '8px' }}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
    />
  );
};

export default WebCamera;
