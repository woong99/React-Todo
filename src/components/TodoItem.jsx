import React from 'react';
import styles from '../styles/TodoItem.module.css';
import { AiFillCheckSquare, AiOutlineBorder, AiOutlineCloseSquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const onEdit = () => {
    dispatch(completeTodo(todo.id));
  };
  const onRemove = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <div className={styles.todoItem}>
      {todo.done ? (
        <AiFillCheckSquare color="#67863a" size="32px" onClick={onEdit} />
      ) : (
        <AiOutlineBorder color="#67863a" size="32px" onClick={onEdit} />
      )}

      <p>{todo.text}</p>
      <AiOutlineCloseSquare
        size="32px"
        color="#67863a"
        onClick={onRemove}
        className={styles.removeIcon}
      />
    </div>
  );
};

export default TodoItem;
