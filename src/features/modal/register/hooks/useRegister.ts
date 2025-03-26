import { useCallback } from 'react';

const useRegister = () => {
  const onSubmitRegister = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');
    const username = formData.get('username');

    console.log(email, password, username);

    e.currentTarget.reset();
  }, []);

  return { onSubmitRegister };
};

export default useRegister;
