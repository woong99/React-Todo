import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/Datas';
import styles from '../styles/LoginForm.module.css';
const LoginForm = () => {
  const { users } = useContext(UserContext);
  const id = useRef();
  const pwd = useRef();
  const navigate = useNavigate();
  const onLogin = () => {
    let isChecked = false;
    users.forEach((user) => {
      if (id.current.value === user.id && pwd.current.value === user.pwd) {
        isChecked = true;
      }
    });
    if (isChecked === true) {
      localStorage.setItem('isLogin', 'true');
      navigate('./main');
    } else {
      alert('아이디나 비밀번호가 틀렸습니다.');
    }
  };
  const onSignUp = () => {
    navigate('./signUp');
  };
  return (
    <div className={styles.container}>
      {/* <form action=""> */}
      <div className={styles.form}>
        <div className={styles.title}>
          <p>LOGIN</p>
        </div>
        <input type="text" placeholder="아이디" name="username" ref={id} />
        <input type="password" placeholder="비밀번호" name="password" ref={pwd} />
        <button onClick={onLogin}>로그인</button>
        <button onClick={onSignUp}>회원가입</button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default LoginForm;
