import { useRef, useState } from 'react';

const useUploadImage = (uploadFile: (files?: FileList | null) => void) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickRef = () => {
    fileInputRef.current?.click();
  };

  // 드래그 요소가 드롭 대상에 들어갈때 발생
  const onDragEnter = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // 드래그 요소가 드롭 대상 위에 있을때 발생
  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // 드래그 요소가 드롭 대상에서 벗어날때 발생
  const onDragLeave = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // 드래그 요소를 드롭 대상에 놓을때 발생
  const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    uploadFile(e.dataTransfer.files);
  };

  const onChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); 
    uploadFile(fileInputRef.current?.files);
  };

  return {
    handleClickRef,
    fileInputRef,
    isDragging,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    onChangeFileUpload,
  };
};

export default useUploadImage;
