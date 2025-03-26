'use client';

import { Typography } from '@/components/common';
import st from './modal.module.scss';
import { IoClose } from 'react-icons/io5';
import clsx from 'clsx';
import { LOGIN, REGISTER } from '@/constants/loginRegister';
import Login from '@/features/modal/login';
import Register from '@/features/modal/register';
import useModal from './(hooks)/useModal';

const Modal = () => {
  const { isModalOpen, modalClose, loginForm, onClickLogin, onClickRegister } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className={st.modalBackground}>
      <div className={st.container}>
        <div className={st.header}>
          <IoClose className={st.closeIcon} onClick={modalClose} />
        </div>
        <div className={st.loginForm}>
          <div className={st.loginFormHeader}>
            <div
              onClick={onClickLogin}
              className={clsx(st.loginButton, loginForm == LOGIN && st.focusLoginButton)}
            >
              <Typography>로그인</Typography>
            </div>
            <div
              onClick={onClickRegister}
              className={clsx(st.loginButton, loginForm == REGISTER && st.focusLoginButton)}
            >
              <Typography>회원가입</Typography>
            </div>
          </div>
          {loginForm == 'LOGIN' ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
