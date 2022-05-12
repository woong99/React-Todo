import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/Datas';
import styles from '../styles/SignUpForm.module.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const name = useRef();
  const id = useRef();
  const pwd = useRef();
  const onSignUp = () => {
    setUsers([
      ...users,
      { name: name.current.value, id: id.current.value, pwd: pwd.current.value },
    ]);
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <p>REGISTER</p>
        </div>
        <input type="text" placeholder="이름" name="username" ref={name} />
        <input type="text" placeholder="아이디" name="userId" ref={id} />
        <input type="password" placeholder="비밀번호" name="password" ref={pwd} />
        <button onClick={onSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default SignUpForm;
