import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HaveAccount.module.scss';
const HaveAccount = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('./login');
  };
  const onSignUp = () => {
    navigate('./signup');
  };
  return (
    <div>
      <div className={styles.welcome}>
        <p>Welcome! Todo List!!</p>
      </div>
      <div className={styles.container}>
        <p>Do you already have an account?</p>
        <div className={styles.buttonContainer}>
          <button onClick={onLogin}>Yes, I do.</button>
          <button onClick={onSignUp}>No, I didn't</button>
        </div>
      </div>
    </div>
  );
};

export default HaveAccount;
