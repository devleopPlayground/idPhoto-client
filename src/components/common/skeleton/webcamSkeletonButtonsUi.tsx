import st from './skeleton.module.scss';

const WebcamSkeletonButtonsUi = () => {
  return (
    <div className={st.WebcamSkeletonButtonsUiContainer}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className={st.webcamSkeletonUi} />
      ))}
    </div>
  );
};

export default WebcamSkeletonButtonsUi;
