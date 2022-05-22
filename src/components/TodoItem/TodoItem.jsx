import React from 'react';
import styles from './TodoItem.module.scss';
import { AiFillStar, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodoFB, removeTodoFB } from '../../redux/modules/todos';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user);
  const onEdit = () => {
    dispatch(changeTodoFB(uid, todo.todoID, todo.isDone));
  };
  const onRemove = () => {
    dispatch(removeTodoFB(uid, todo.todoID));
  };
  const color = {
    width: '10px',
    height: '30px',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: todo.color,
  };
  return (
    <div className={styles.todoItem}>
      {todo.star ? (
        <AiFillStar size="32px" color="rgb(245,195,68)" className={styles.aiFillStar} />
      ) : (
        <AiFillStar size="32px" color="white" className={styles.aiFillStar} />
      )}

      {todo.isDone ? (
        <div className={styles.fillCircle} onClick={onEdit}>
          <div className={styles.innerCircle}></div>
        </div>
      ) : (
        <div className={styles.emptyCircle} onClick={onEdit}></div>
      )}
      <div style={color}></div>
      <p>{todo.title}</p>
      <AiOutlineClose size="32px" color="gray" onClick={onRemove} className={styles.removeIcon} />
    </div>
  );
};

export default React.memo(TodoItem);
