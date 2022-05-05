import React from 'react';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import TodoCount from '../components/TodoCount';
import TodoItemList from '../components/TodoItemList';
import Weather from '../components/Weather';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Weather />
      <Header />
      <InputBox />
      <TodoCount />
      <TodoItemList />
    </div>
  );
};

export default Home;
