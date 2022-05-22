import React from 'react';
import styles from './TodoHeader.module.scss';

const TodoHeader = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = ('0' + today.getDate()).slice(-2);
  const weekday = today.getDay();
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dateString = month + '/' + day + ' ' + weekdays[weekday];

  return (
    <div className={styles.container}>
      <p>{dateString}</p>
    </div>
  );
};

export default TodoHeader;
