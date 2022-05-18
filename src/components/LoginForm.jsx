import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/modules/user';
import styles from '../styles/LoginForm.module.css';
const LoginForm = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const id = useRef();
  const pwd = useRef();
  const navigate = useNavigate();
  const onLogin = () => {
    console.log(users);
    let isChecked = false;
    users.forEach((user, index) => {
      if (id.current.value === user.id && pwd.current.value === user.pwd) {
        isChecked = true;
        dispatch(addUser(users[index]));
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
