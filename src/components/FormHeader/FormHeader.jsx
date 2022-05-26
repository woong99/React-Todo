import React from 'react';
import styles from './FormHeader.module.scss';

const FormHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.square}></div>
      <p>{props.title}</p>
    </div>
  );
};

export default FormHeader;
