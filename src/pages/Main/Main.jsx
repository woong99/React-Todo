import React from 'react';
import InputHeader from '../../components/InputHeader';
import Info from '../../components/Info';
import InputBox from '../../components/InputBox/InputBox';
import TodoCount from '../../components/TodoCount';
import TodoItemList from '../../components/TodoItemList/TodoItemList';
// import Weather from '../components/Weather';
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
      {/* <div className={styles.left}>
        <Info />
        <Weather />
      </div>
      <div className={styles.right}>
        <InputHeader />
        <InputBox />
        <TodoCount />
        <TodoItemList />
      </div> */}
    </div>
  );
};

export default Main;
