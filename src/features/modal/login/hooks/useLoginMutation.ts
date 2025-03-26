import { useMutation } from '@tanstack/react-query';
import { socialLogin } from '../apis';
import useModalStore from '@/stores/useModalStore';
import { LocalStorage } from '@/utils/localStorage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token';

export type UseLoginMutationType = {
  email: string;
  password: string;
};

type LoginResponseType = {
  accessToken: string;
  refreshToken: string;
};

const useLoginMutation = () => {
  return useMutation<LoginResponseType, Error, UseLoginMutationType>({
    mutationFn: ({ email, password }) => socialLogin({ email, password }),
    onSuccess: (data) => {
      useModalStore.getState().closeModal();

      LocalStorage.setItem(ACCESS_TOKEN, data.accessToken);
      LocalStorage.setItem(REFRESH_TOKEN, data.refreshToken);
    },
  });
};

export default useLoginMutation;
