import { useCallback } from 'react';
import useLoginMutation from './useLoginMutation';

const useLogin = () => {
  const { mutate } = useLoginMutation();

  const onSubmitLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      mutate({ email, password });
      e.currentTarget.reset();
    },
    [mutate],
  );

  return { onSubmitLogin };
};

export default useLogin;
