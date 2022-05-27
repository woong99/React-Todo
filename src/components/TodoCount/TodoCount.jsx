import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './TodoCount.module.scss';

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
      <p>All : {todos.length}</p>
      <p>Incomplete : {doneCount}</p>
      <p>Complete : {todos.length - doneCount}</p>
    </div>
  );
};

export default TodoCount;
