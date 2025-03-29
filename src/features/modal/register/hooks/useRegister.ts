import { useCallback } from 'react';
import useRegisterMutation from './useRegisterMutation';

const useRegister = () => {
  const { mutate } = useRegisterMutation();

  const onSubmitRegister = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('username') as string;

    mutate({ email, password, username });
    e.currentTarget.reset();
  }, []);

  return { onSubmitRegister };
};

export default useRegister;
