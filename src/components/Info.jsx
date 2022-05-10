import React from 'react';
import woong from '../assets/woong.jpeg';
import styles from '../styles/Info.module.css';
const Info = () => {
  return (
    <div className={styles.container}>
      <img src={woong} alt="얼굴" width="200px" height="200px" />
      <p>정웅교</p>
    </div>
  );
};

export default Info;
