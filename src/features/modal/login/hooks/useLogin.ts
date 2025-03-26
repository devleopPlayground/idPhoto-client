import { useCallback } from 'react';

const useLogin = () => {
  const onSubmitLogin = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email, password);

    e.currentTarget.reset();
  }, []);

  return { onSubmitLogin };
};

export default useLogin;
