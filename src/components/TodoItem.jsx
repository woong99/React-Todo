import React, { useContext } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/TodoItem.module.css';
import { AiFillCheckSquare, AiOutlineBorder, AiOutlineCloseSquare } from 'react-icons/ai';

const TodoItem = ({ value }) => {
  const { datas, setDatas } = useContext(UserContext);
  const onEdit = () => {
    setDatas(
      datas.map((data) => (data.id === value.id ? { ...data, checked: !value.checked } : data)),
    );
  };
  const onRemove = () => {
    setDatas(datas.filter((data) => data.id !== value.id));
  };
  return (
    <div className={styles.todoItem}>
      {value.checked ? (
        <AiFillCheckSquare color="#67863a" size="32px" onClick={onEdit} />
      ) : (
        <AiOutlineBorder color="#67863a" size="32px" onClick={onEdit} />
      )}

      <p>{value.input}</p>
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
