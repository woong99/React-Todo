import React from 'react';
import styles from './HaveAccount.module.scss';
const HaveAccount = () => {
  return (
    <div>
      <div className={styles.welcome}>
        <p>Welcome! Todo List!!</p>
      </div>
      <div className={styles.container}>
        <p>Do you already have an account?</p>
        <div className={styles.buttonContainer}>
          <button>Yes, I do.</button>
          <button>No, I didn't</button>
        </div>
      </div>
    </div>
  );
};

export default HaveAccount;
