import React from 'react';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import TodoItemList from '../components/TodoItemList';

const Home = () => {
  return (
    <div>
      <Header />
      <InputBox />
      <TodoItemList />
    </div>
  );
};

export default Home;
