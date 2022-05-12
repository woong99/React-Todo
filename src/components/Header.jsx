import React, { useContext } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/Header.module.css';

const Header = () => {
  // const { user } = useContext(UserContext);
  return (
    // <div className={styles.container}>{user ? <p>{user}'s To Do List</p> : <p>To Do List</p>}</div>
    <div className={styles.container}>
      <p>woong</p>
    </div>
  );
};

export default Header;
