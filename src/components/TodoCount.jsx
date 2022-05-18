import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/TodoCount.module.css';

const TodoCount = () => {
  const todos = useSelector((state) => state.todos);
  let cnt = 0;
  todos.map((todo) => (todo.done === false ? (cnt += 1) : (cnt += 0)));
  return (
    <div className={styles.container}>
      <p>전체 : {todos.length}</p>
      <p>미완료 : {cnt}</p>
      <p>완료 : {todos.length - cnt}</p>
    </div>
  );
};

export default TodoCount;
