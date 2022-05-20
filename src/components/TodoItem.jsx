import React, { useEffect } from 'react';
import styles from '../styles/TodoItem.module.css';
import { AiFillCheckSquare, AiOutlineBorder, AiOutlineCloseSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import { loadBucketFB, removeTodoFB } from '../redux/modules/bucket';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user);
  const firestore = useFirestore();
  const { uidd } = useSelector((state) => state.firebase.auth);
  const onEdit = () => {
    firestore
      .collection('users')
      .doc(uid)
      .collection('todos')
      .doc(todo.todoID)
      .update({ ...todo, isDone: !todo.isDone });
  };
  const onRemove = () => {
    dispatch(removeTodoFB('U44iUzQterSkDVMoIsjJZlhyJGx2', todo.todoID));
    // firestore.collection('users').doc(uid).collection('todos').doc(todo.todoID).delete();
  };
  return (
    <div className={styles.todoItem}>
      {todo.isDone ? (
        <AiFillCheckSquare color="#67863a" size="32px" onClick={onEdit} />
      ) : (
        <AiOutlineBorder color="#67863a" size="32px" onClick={onEdit} />
      )}

      <p>{todo.title}</p>
      <AiOutlineCloseSquare
        size="32px"
        color="#67863a"
        onClick={onRemove}
        className={styles.removeIcon}
      />
    </div>
  );
};

export default React.memo(TodoItem);
