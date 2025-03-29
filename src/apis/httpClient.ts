import axios from 'axios';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { reissueAccessToken, verifyRefreshToken } from './token';
import { LocalStorage } from '@/utils/localStorage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token';
import useAuthStore from '@/stores/useAuthStore';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 10000,
});

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = LocalStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const request = error.config;

    if (error.response?.status === 401 && !request._retry) {
      request._retry = true;

      const { statusCode } = await verifyRefreshToken();

      if (statusCode === 401) {
        LocalStorage.removeItem(ACCESS_TOKEN);
        LocalStorage.removeItem(REFRESH_TOKEN);

        setAccessToken(null);

        window.location.href = '/';
      }

      const newAccessToken = await reissueAccessToken();

      LocalStorage.setItem(ACCESS_TOKEN, newAccessToken);
      request.headers.authorization = `Bearer ${newAccessToken}`;

      return api(request);
    }

    return Promise.reject(error);
  },
);

export { api };
