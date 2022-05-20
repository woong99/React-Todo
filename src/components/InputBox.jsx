import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import { addTodoFB } from '../redux/modules/bucket';
import { addTodo } from '../redux/modules/todos';
import styles from '../styles/InputBox.module.css';

const InputBox = () => {
  // const { uid } = useSelector((state) => state.firebase.auth);
  const uid = useSelector((state) => state.user);
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const id = useRef(3);
  const click = () => {
    // firestore
    //   .collection('users')
    //   .doc(uid)
    //   .collection('todos')
    //   .add({ title: input, isDone: false })
    //   .then((docRef) => {
    //     docRef.update({ todoID: docRef.id });
    //   });

    // dispatch(addTodo([input, id.current]));
    dispatch(addTodoFB('U44iUzQterSkDVMoIsjJZlhyJGx2', { title: input, isDone: false }));
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
