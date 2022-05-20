import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/TodoCount.module.css';

const TodoCount = () => {
  const todos = useSelector((state) => state.firestore.data.todos);
  const [todosCount, setTodosCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  useEffect(() => {
    if (todos) {
      setTodosCount(Object.keys(todos).length);
      Object.values(todos).map(
        (todo) => console.log(todo),
        // todo.isDone === false ? setDoneCount(doneCount + 1) : setDoneCount(doneCount),
      );
    }
  }, [todos]);
  return (
    <div className={styles.container}>
      <p>전체 : {todosCount}</p>
      <p>미완료 : {doneCount}</p>
      <p>완료 : {todosCount - doneCount}</p>
    </div>
  );
};

export default TodoCount;
