import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import styles from '../styles/InputBox.module.css';

const InputBox = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const id = useRef(3);
  const click = () => {
    dispatch(addTodo(input, id.current));
    id.current += 1;
    setInput('');
  };
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      click();
    }
  };
  return (
    <div className={styles.inputBox_container}>
      <input
        className={styles.inputBox}
        placeholder="웅교씨의 투 두 리스트를 입력하시오"
        onChange={onChangeInput}
        value={input}
        onKeyPress={onKeyPress}
      />
      <button className={styles.plusButton} onClick={click}>
        +
      </button>
    </div>
  );
};

export default InputBox;
