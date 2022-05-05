import React, { useState, useContext, useRef } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/InputBox.module.css';

const InputBox = () => {
  const context = useContext(UserContext);
  const { datas, setDatas } = context;
  const [input, setInput] = useState('');
  const id = useRef(3);
  const click = () => {
    setDatas([...datas, { input, checked: false, id: id.current }]);
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
