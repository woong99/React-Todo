import React from 'react';
import FormHeader from '../../components/FormHeader/FormHeader';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './SignUp.module.scss';
const SignUp = () => {
  return (
    <div className={styles.container}>
      <FormHeader title={'Sign up'} />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
