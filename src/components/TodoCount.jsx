import React, { useContext } from 'react';
import { UserContext } from '../store/Datas';
import styles from '../styles/TodoCount.module.css';

const TodoCount = () => {
  const { datas } = useContext(UserContext);
  let cnt = 0;
  datas.map((data) => (data.checked === false ? (cnt += 1) : (cnt += 0)));
  return (
    <div className={styles.container}>
      <p>전체 : {datas.length}</p>
      <p>미완료 : {cnt}</p>
      <p>완료 : {datas.length - cnt}</p>
    </div>
  );
};

export default TodoCount;
