import { REFRESH_TOKEN } from '@/constants/token';
import { LocalStorage } from '@/utils/localStorage';
import { api } from '../httpClient';

const reissueAccessToken = async () => {
  const refreshToken = LocalStorage.getItem(REFRESH_TOKEN);

  const data = await api
    .post('/auth/reissue/accessToken', null, {
      headers: {
        authorization: `Bearer ${refreshToken}`,
      },
    })
    .then((response) => response.data);

  return data;
};

const verifyRefreshToken = async () => {
  const refreshToken = LocalStorage.getItem(REFRESH_TOKEN);

  const data = await api
    .post('/auth/verity/refreshToken', null, {
      headers: {
        authorization: `Bearer ${refreshToken}`,
      },
    })
    .then((response) => response.data);

  return data;
};

export { reissueAccessToken, verifyRefreshToken };
