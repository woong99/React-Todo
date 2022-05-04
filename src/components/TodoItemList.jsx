import React, { useContext } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/TodoItemList.module.css';
import TodoItem from './TodoItem';
const TodoItemList = () => {
  const { datas } = useContext(UserContext);
  const dataList = datas.map((data, index) => <TodoItem value={data} key={index} />);
  return <div className={styles.todoItemListContainer}>{dataList}</div>;
};

export default TodoItemList;
