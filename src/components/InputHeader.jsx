import React from 'react';
import styles from '../styles/InputHeader.module.css';

const Header = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const weekday = today.getDay();
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dateString = year + '.' + month + '.' + day + ' ' + weekdays[weekday];

  return (
    <div className={styles.header_container}>
      <p>{dateString}</p>
      <h1>To Do List</h1>
    </div>
  );
};

export default Header;
