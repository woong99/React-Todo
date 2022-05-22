import React from 'react';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
