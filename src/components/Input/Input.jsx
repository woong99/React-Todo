import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styles from './Input.module.scss';
const Input = () => {
  const [btn, setBtn] = useState(false);
  const onTrue = () => {
    setBtn(true);
  };
  const onFalse = () => {
    setBtn(false);
  };
  return (
    <div className={styles.container}>
      <label>
        <button onClick={onTrue}>+</button>
        <p>Add to-do list</p>
      </label>
      {btn && <AddTodo false={onFalse} />}
    </div>
  );
};

export default Input;
