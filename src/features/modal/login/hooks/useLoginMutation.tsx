import { useMutation } from '@tanstack/react-query';
import { socialLogin } from '../apis';
import useModalStore from '@/stores/useModalStore';
import { LocalStorage } from '@/utils/localStorage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token';
import useToastStore from '@/stores/useToastStore';
import ToastContent from '@/common/toast/toastContent';
import useAuthStore from '@/stores/useAuthStore';

export type UseLoginMutationType = {
  email: string;
  password: string;
};

type LoginResponseType = {
  accessToken: string;
  refreshToken: string;
};

const useLoginMutation = () => {
  const { closeModal } = useModalStore();
  const { showToast } = useToastStore();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  return useMutation<LoginResponseType, Error, UseLoginMutationType>({
    mutationFn: ({ email, password }) => socialLogin({ email, password }),
    onSuccess: (data) => {
      closeModal();

      LocalStorage.setItem(ACCESS_TOKEN, data.accessToken);
      LocalStorage.setItem(REFRESH_TOKEN, data.refreshToken);

      setAccessToken(data.accessToken);

      showToast(<ToastContent content="로그인 성공!" />);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data.message ?? '알 수 없는 오류가 발생했습니다.';
      showToast(<ToastContent type="error" content={errorMessage} />);
    },
  });
};

export default useLoginMutation;
