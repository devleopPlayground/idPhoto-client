import clsx from 'clsx';
import useUploadImage from './hooks/useUploadImage';
import st from './uploadImage.module.scss';
import { Typography } from '@/components/common';

type UploadImageProps = {
  uploadFile: (files?: FileList | null) => void;
};

const UploadImage = ({ uploadFile }: UploadImageProps) => {
  const {
    handleClickRef,
    fileInputRef,
    isDragging,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    onChangeFileUpload,
  } = useUploadImage(uploadFile);

  return (
    <div className={st.container}>
      <Typography style={{ textAlign: 'center' }}>
        카메라를 이용해 사진을 찍어보세요. <br />
        또는 버튼을 클릭하거나 사진을 드래그하여 업로드하세요.
      </Typography>
      <button
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={handleClickRef}
        className={clsx(isDragging && st.dragButton, st.imageInput)}
      >
        <Typography>사진 업로드</Typography>
      </button>
      <input className={st.input} ref={fileInputRef} type="file" onChange={onChangeFileUpload} />
    </div>
  );
};

export default UploadImage;
