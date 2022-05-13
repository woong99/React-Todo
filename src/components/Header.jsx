import React, { useContext } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.container}>
      {user ? <p>{user.name}'s To Do List</p> : <p>To Do List</p>}
    </div>
  );
};

export default Header;
