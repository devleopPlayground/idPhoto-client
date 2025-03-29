'use client';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token';
import useAuthStore from '@/stores/useAuthStore';
import { LocalStorage } from '@/utils/localStorage';
import { useSearchParams } from 'next/navigation';
import st from './googleLogin.module.scss';
import { useEffect } from 'react';
import Loader from '@/components/common/loader';

const GoogleLogin = () => {
  const searchParams = useSearchParams();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    console.log(accessToken, refreshToken);

    if (accessToken && refreshToken) {
      LocalStorage.setItem(ACCESS_TOKEN, accessToken);
      LocalStorage.setItem(REFRESH_TOKEN, refreshToken);

      setAccessToken(accessToken);

      window.location.href = '/';
    }
  }, [searchParams, setAccessToken]);

  return (
    <div className={st.container}>
      <Loader size="lg" />
    </div>
  );
};

export default GoogleLogin;
