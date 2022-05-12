import React from 'react';
import InputHeader from '../components/InputHeader';
import Info from '../components/Info';
import InputBox from '../components/InputBox';
import TodoCount from '../components/TodoCount';
import TodoItemList from '../components/TodoItemList';
import Weather from '../components/Weather';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.left}>
        <Info />
        <Weather />
      </div>
      <div className={styles.right}>
        <InputHeader />
        <InputBox />
        <TodoCount />
        <TodoItemList />
      </div>
    </div>
  );
};

export default Home;
