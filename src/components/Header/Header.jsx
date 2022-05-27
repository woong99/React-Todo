import React from 'react';
import styles from './Header.module.scss';
import { AiOutlineBars, AiFillHome, AiOutlineUser } from 'react-icons/ai';
import Weather from '../Weather/Weather';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const onHome = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <AiOutlineBars size="36px" color="white" className={styles.aiOutlineBars} />
        <AiFillHome size="36px" color="white" onClick={onHome} />
      </div>
      <div className={styles.rightContainer}>
        <Weather />
        <AiOutlineUser size="36px" color="white" className={styles.aiOutlineUser} />
      </div>
    </div>
  );
};

export default Header;
