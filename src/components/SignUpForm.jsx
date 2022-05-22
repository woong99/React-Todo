import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/modules/user';
import styles from '../styles/SignUpForm.module.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgCheck, setImgCheck] = useState('');
  const name = useRef();
  const id = useRef();
  const pwd = useRef();
  const userImg = useRef();
  const onSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, id.current.value, pwd.current.value)
      .then((userCredential) => {
        dispatch(addUser(userCredential.user.uid));
        navigate('/main');
      })
      .catch((error) => console.log(error.code));
  };
  const onImg = () => {
    setImgCheck('선택 완료');
  };
  const onBack = () => {
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
        <div className={styles.fileBox}>
          <input
            className={styles.uploadCheck}
            placeholder="사용자 이미지"
            value={imgCheck}
            readOnly
          />

          <label htmlFor="file">파일찾기</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            name="file"
            ref={userImg}
            onChange={onImg}
          />
        </div>
        <button onClick={onSignUp}>회원가입</button>
        <button onClick={onBack}>뒤로가기</button>
      </div>
    </div>
  );
};

export default SignUpForm;
