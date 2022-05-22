import React from 'react';
import styles from '../styles/TodoItem.module.css';
import { AiFillCheckSquare, AiOutlineBorder, AiOutlineCloseSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodoFB, removeTodoFB } from '../redux/modules/todos';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user);
  const onEdit = () => {
    dispatch(changeTodoFB(uid, todo.todoID, todo.isDone));
  };
  const onRemove = () => {
    dispatch(removeTodoFB(uid, todo.todoID));
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
