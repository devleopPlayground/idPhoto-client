import Input from '@/components/common/input';
import st from './registerModal.module.scss';
import Button from '@/components/common/button';
import useRegister from './hooks/useRegister';
import { GoogleLoginBox } from '@/components/common';

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
      <GoogleLoginBox />
    </div>
  );
};

export default Register;
