import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './Input.module.scss';
const Input = () => {
  return (
    <div className={styles.container}>
      <button>+</button>
      <p>Add my to-do list</p>
    </div>
  );
};

export default Input;
