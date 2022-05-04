import React from 'react';
import styles from '../styles/InputBox.module.css';

const InputBox = () => {
  return (
    <div className={styles.inputBox_container}>
      <input className={styles.inputBox} placeholder="웅교씨의 투 두 리스트를 입력하시오" />
      <button className={styles.plusButton}>+</button>
    </div>
  );
};

export default InputBox;
