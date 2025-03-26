import { api } from '@/apis/httpClient';
import type { UseLoginMutationType } from '../hooks/useLoginMutation';

export const socialLogin = async ({ email, password }: UseLoginMutationType) => {
  return await api.post('/auth/login', { email, password }).then((response) => response.data);
};
