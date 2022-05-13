import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/Datas';
import styles from '../styles/SignUpForm.module.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [imgCheck, setImgCheck] = useState('');
  const name = useRef();
  const id = useRef();
  const pwd = useRef();
  const userImg = useRef();
  const onSignUp = () => {
    setUsers([
      ...users,
      {
        name: name.current.value,
        id: id.current.value,
        pwd: pwd.current.value,
        img: URL.createObjectURL(userImg.current.files[0]),
      },
    ]);
    navigate('/');
  };
  const onImg = () => {
    setImgCheck('선택 완료');
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
      </div>
    </div>
  );
};

export default SignUpForm;
