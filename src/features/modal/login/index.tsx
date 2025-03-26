import Input from '@/components/common/input';
import st from './login.module.scss';
import Button from '@/components/common/button';
import { FcGoogle } from 'react-icons/fc';
import useLogin from './hooks/useLogin';

const Login = () => {
  const { onSubmitLogin } = useLogin();

  return (
    <div>
      <form className={st.loginFormWrapper} onSubmit={onSubmitLogin}>
        <Input name="email" type="text" inputId="login" label="로그인" />
        <Input name="password" type="password" inputId="password" label="비밀번호" />
        <Button style={{ marginTop: '15px' }} variant="lightPink" type="submit">
          로그인
        </Button>
      </form>
      <div className={st.googleLoginButton}>
        <FcGoogle style={{ width: '20px', height: '20px' }} />
        구글 계정으로 로그인
      </div>
    </div>
  );
};

export default Login;
