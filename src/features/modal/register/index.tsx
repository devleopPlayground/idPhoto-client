import Input from '@/components/common/input';
import st from './registerModal.module.scss';
import Button from '@/components/common/button';
import { FcGoogle } from 'react-icons/fc';
import useRegister from './hooks/useRegister';

const Register = () => {
  const { onSubmitRegister } = useRegister();

  return (
    <div>
      <form className={st.loginFormWrapper} onSubmit={onSubmitRegister}>
        <Input name="email" type="text" inputId="login" label="로그인" />
        <Input name="password" type="password" inputId="password" label="비밀번호" />
        <Input name="username" type="username" inputId="username" label="닉네임" />
        <Button style={{ marginTop: '15px' }} variant="lightPink" type="submit">
          회원가입
        </Button>
      </form>
      <div className={st.googleLoginButton}>
        <FcGoogle style={{ width: '20px', height: '20px' }} />
        구글 계정으로 로그인
      </div>
    </div>
  );
};

export default Register;
