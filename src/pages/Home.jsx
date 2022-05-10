import React from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import InputBox from '../components/InputBox';
import TodoCount from '../components/TodoCount';
import TodoItemList from '../components/TodoItemList';
import Weather from '../components/Weather';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Info />
        <Weather />
      </div>
      <div className={styles.right}>
        <Header />
        <InputBox />
        <TodoCount />
        <TodoItemList />
      </div>
    </div>
  );
};

export default Home;
