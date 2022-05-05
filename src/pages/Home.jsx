import React from 'react';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import TodoCount from '../components/TodoCount';
import TodoItemList from '../components/TodoItemList';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <InputBox />
      <TodoCount />
      <TodoItemList />
    </div>
  );
};

export default Home;
