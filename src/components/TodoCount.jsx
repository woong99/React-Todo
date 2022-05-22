import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/TodoCount.module.css';

const TodoCount = () => {
  const todos = useSelector((state) => state.todos);
  const [doneCount, setDoneCount] = useState(0);
  useEffect(() => {
    setDoneCount(0);
    if (todos !== []) {
      todos.map((todo) => {
        if (todo.isDone === true) {
          setDoneCount((doneCount) => doneCount + 1);
        }
      });
    }
  }, [todos]);

  return (
    <div className={styles.container}>
      <p>전체 : {todos.length}</p>
      <p>미완료 : {doneCount}</p>
      <p>완료 : {todos.length - doneCount}</p>
    </div>
  );
};

export default TodoCount;
