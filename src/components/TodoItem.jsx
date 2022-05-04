import React from 'react';
import styles from '../styles/TodoItem.module.css';
import { AiFillCheckSquare } from 'react-icons/ai';

const TodoItem = ({ value }) => {
  return (
    <div className={styles.todoItem}>
      <AiFillCheckSquare color="#67863a" size="32px" />
      <p>{value}</p>
    </div>
  );
};

export default TodoItem;
