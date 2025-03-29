import { api } from '@/apis/httpClient';
import { UseRegisterType } from '../hooks/useRegisterMutation';

export const socialRegister = async ({ email, password, username }: UseRegisterType) => {
  return await api.post('/auth/register', { email, password, username }).then((response) => response.data);
};
