import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodoFB } from '../../redux/modules/todos';
import styles from './TodoItemList.module.scss';
import TodoItem from '../TodoItem/TodoItem';
const TodoItemList = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadTodoFB(uid));
  }, [dispatch, uid]);
  const todos = useSelector((state) => state.todos);
  todos.sort((a, b) => {
    return a.color.index - b.color.index;
  });
  return (
    <div className={styles.todoItemListContainer}>
      {todos && Object.values(todos).map((data, index) => <TodoItem todo={data} key={index} />)}
    </div>
  );
};

export default TodoItemList;
