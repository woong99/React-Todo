import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/modules/user';
import styles from './SignUpForm.module.scss';
import { AiFillCamera } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { storageService, dbService } from '../../firebase';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [attachment, setAttachment] = useState();
  const [file, setFile] = useState('');
  const name = useRef();
  const id = useRef();
  const pwd = useRef();

  const onFileChange = (event) => {
    const {
      target: { files, value },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    setFile(value);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onSubmit = async (uid) => {
    let attachmentUrl = '';
    if (attachment !== '') {
      const attachmentRef = storageService.ref().child(`${uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, 'data_url');
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const postObj = {
      text: '123',
      createdAt: Date.now(),
      creatorId: '12332322',
      attachmentUrl,
    };
    await dbService.collection('posts').add(postObj);
    setAttachment('');
    setFile('');
  };

  const onSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, id.current.value, pwd.current.value)
      .then((userCredential) => {
        dispatch(addUser(userCredential.user.uid));
        onSubmit(userCredential.user.uid);
        navigate('/main');
      })
      .catch((error) => console.log(error.code));
  };

  const onBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.fileBox}>
          <div className={styles.uploadImg}>
            {attachment === undefined ? (
              <AiFillCamera size="60px" color="rgb(88,132,51)" />
            ) : (
              <img src={attachment} alt="사진" />
            )}
          </div>
          <label htmlFor="file">Select..</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            name="file"
            value={file}
            onChange={onFileChange}
          />
        </div>
        <div className={styles.textInput}>
          <input type="text" placeholder="NAME" name="username" ref={name} />
          <input type="text" placeholder="ID" name="userId" ref={id} />
          <input type="password" placeholder="PASSWORD" name="password" ref={pwd} />
        </div>
      </div>
      <button onClick={onSignUp}>회원가입</button>
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
};

export default SignUpForm;
