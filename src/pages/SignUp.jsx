import React from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import styles from '../styles/SignUp.module.css';
const SignUp = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
