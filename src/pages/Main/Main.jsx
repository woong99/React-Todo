import React from 'react';
import TodoCount from '../../components/TodoCount/TodoCount';
import TodoItemList from '../../components/TodoItemList/TodoItemList';
import styles from './Main.module.scss';
import Header from '../../components/Header/Header';
import TodoHeader from '../../components/TodoHeader/TodoHeader';
import Input from '../../components/Input/Input';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.todoContainer}>
        <TodoHeader />
        <TodoItemList />
      </div>
      <Input />
      <TodoCount />
    </div>
  );
};

export default Main;
