import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Info.module.css';
const Info = () => {
  const user = useSelector((state) => state.user);
  console.log(user[0]);
  return (
    <div className={styles.container}>
      {/* <img src={user.img} alt="얼굴" width="200px" height="200px" /> */}
      <p>{user[0].name}</p>
    </div>
  );
};

export default Info;
