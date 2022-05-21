import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoFB } from '../redux/modules/todos';
import styles from '../styles/InputBox.module.css';

const InputBox = () => {
  const uid = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const click = () => {
    dispatch(addTodoFB(uid, { title: input, isDone: false }));
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
