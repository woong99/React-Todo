import React from 'react';
import styles from './TodoItem.module.scss';
import Styled from 'styled-components';
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
  const StyledColor = Styled.div`
  width: 10px;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${todo.color.color};

  @media screen and (max-width: 767px) {
    width: 7px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  `;
  return (
    <div className={styles.todoItem}>
      {todo.significant ? (
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
      <StyledColor></StyledColor>
      <p className={styles.category}>{todo.category && `${todo.category} | `}</p>
      <p className={styles.title}>{todo.title}</p>
      <AiOutlineClose size="32px" color="gray" onClick={onRemove} className={styles.removeIcon} />
    </div>
  );
};

export default React.memo(TodoItem);
