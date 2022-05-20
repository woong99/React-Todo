import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodoFB } from '../redux/modules/bucket';
import styles from '../styles/TodoItemList.module.css';
import TodoItem from './TodoItem';
const TodoItemList = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadTodoFB('U44iUzQterSkDVMoIsjJZlhyJGx2'));
  }, []);
  const todos = useSelector((state) => state.bucket);
  console.log(todos);
  return (
    <div className={styles.todoItemListContainer}>
      {todos && Object.values(todos).map((data, index) => <TodoItem todo={data} key={index} />)}
    </div>
  );
};

export default TodoItemList;
