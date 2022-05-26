import React from 'react';
import FormHeader from '../../components/FormHeader/FormHeader';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <FormHeader title={'Sign in'} />
      <LoginForm />
    </div>
  );
};

export default Login;
