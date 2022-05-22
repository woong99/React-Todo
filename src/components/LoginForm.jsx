import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/modules/user';
import styles from '../styles/LoginForm.module.css';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@firebase/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const id = useRef();
  const pwd = useRef();
  const navigate = useNavigate();
  const onLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, id.current.value, pwd.current.value).then((userCredential) => {
      dispatch(addUser(userCredential.user.uid));
      navigate('/main');
    });
  };
  const onSignUp = () => {
    navigate('./signUp');
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      dispatch(addUser(result.user.uid));
      navigate('./main');
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <p>LOGIN</p>
        </div>
        <input type="text" placeholder="아이디" name="username" ref={id} />
        <input type="password" placeholder="비밀번호" name="password" ref={pwd} />
        <button onClick={onLogin}>로그인</button>
        <button onClick={signInWithGoogle}>구글로그인</button>
        <button onClick={onSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default LoginForm;
