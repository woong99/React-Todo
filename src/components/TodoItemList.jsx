import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/TodoItemList.module.css';
import TodoItem from './TodoItem';
const TodoItemList = () => {
  const todos = useSelector((state) => state.todos);
  const dataLists = todos.map((data, index) => <TodoItem todo={data} key={index} />);
  return <div className={styles.todoItemListContainer}>{dataLists}</div>;
};

export default TodoItemList;
