import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/modules/user';
import styles from './LoginForm.module.scss';
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
        <input type="text" placeholder="ID" name="username" ref={id} />
        <input type="password" placeholder="PASSWORD" name="password" ref={pwd} />
        <button onClick={onLogin}>Sign in</button>
        <div className={styles.googleBtn} onClick={signInWithGoogle}>
          <div className={styles.googleIconWrapper}>
            <img
              className={styles.googleIcon}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google"
            />
          </div>
          <p className={styles.btnText}>Sign in with google</p>
        </div>
      </div>
      <div className={styles.function}></div>
    </div>
  );
};

export default LoginForm;
