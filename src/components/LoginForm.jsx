import React from 'react';
import styles from '../styles/LoginForm.module.css';
const LoginForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.form}>
          <div className={styles.title}>
            <p>LOGIN</p>
          </div>
          <input type="text" />
          <input type="password" />
          <button>로그인</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
