import React, { useContext } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/Info.module.css';
const Info = () => {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <img src={user.img} alt="얼굴" width="200px" height="200px" />
      <p>{user.name}</p>
    </div>
  );
};

export default Info;
