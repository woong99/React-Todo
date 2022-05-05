import React from 'react';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import TodoCount from '../components/TodoCount';
import TodoItemList from '../components/TodoItemList';

const Home = () => {
  return (
    <div>
      <Header />
      <InputBox />
      <TodoCount />
      <TodoItemList />
    </div>
  );
};

export default Home;
