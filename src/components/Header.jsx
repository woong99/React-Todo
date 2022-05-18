import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Header.module.css';

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.container}>
      {user ? <p>{user[0].name}'s To Do List</p> : <p>To Do List</p>}
    </div>
  );
};

export default Header;
