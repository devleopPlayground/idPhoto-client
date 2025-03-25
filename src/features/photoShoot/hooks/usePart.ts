import { base64ToBlob } from '@/utils/base64ToBlob';
import { useState } from 'react';

const usePart = () => {
  const [part, setPart] = useState('');

  const onClickResultButton = (imageUrl: string) => {
    console.log(123, base64ToBlob(imageUrl));
  };

  return {
    part,
    onClickResultButton,
  };
};

export default usePart;
