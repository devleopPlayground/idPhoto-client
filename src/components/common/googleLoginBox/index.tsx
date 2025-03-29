'use client';

import { FcGoogle } from 'react-icons/fc';
import st from './googleLoginBox.module.scss';

const GoogleLoginBox = () => {
  const onClickGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google/login`;
  };

  return (
    <div className={st.googleLoginBox} onClick={onClickGoogleLogin}>
      <FcGoogle style={{ width: '20px', height: '20px' }} />
      구글 계정으로 로그인
    </div>
  );
};

export default GoogleLoginBox;
