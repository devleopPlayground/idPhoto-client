import { MutableRefObject, useState } from 'react';
import Webcam from 'react-webcam';
import { videoConstraints } from '@/features/photoShoot/utils';
import WebcamSkeletonUi from '@/components/common/skeleton/webcamSkeletonUi';

type WebCameraProps = {
  webcamRef: MutableRefObject<Webcam | null>;
  isCameraLoading: boolean;
  onUserMedia: () => void;
};

const WebCamera = ({ webcamRef, isCameraLoading, onUserMedia }: WebCameraProps) => {
  const [권한Error, set권한Error] = useState('');

  return (
    <>
      {isCameraLoading && <WebcamSkeletonUi 권한Error={권한Error} />}
      <Webcam
        style={{ position: 'relative', borderRadius: '8px' }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        onUserMediaError={(err) => set권한Error('웹캠 권한이 필요합니다.')}
      />
    </>
  );
};

export default WebCamera;
