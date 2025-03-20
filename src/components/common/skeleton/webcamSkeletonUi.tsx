import clsx from 'clsx';
import st from './skeleton.module.scss';
import Typography from '../typography';

type WebcamSkeletonUiProps = {
  권한Error?: string;
};

const WebcamSkeletonUi = ({ 권한Error }: WebcamSkeletonUiProps) => {
  const onClickRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(st.container, st.webcamSkeletonUi)}>
      {권한Error && (
        <>
          <Typography variant="lg">{권한Error}</Typography>
          <button onClick={onClickRefreshPage} style={{ cursor: 'pointer' }}>
            새로고침하여 권한을 새롭게 설정해보세요.
          </button>
        </>
      )}
    </div>
  );
};

export default WebcamSkeletonUi;
