import React from 'react';
import styles from './Header.module.scss';
import { AiOutlineBars, AiFillHome, AiOutlineUser } from 'react-icons/ai';
import Weather from '../Weather/Weather';
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <AiOutlineBars size="36px" color="white" className={styles.aiOutlineBars} />
        <AiFillHome size="36px" color="white" />
      </div>
      <div className={styles.rightContainer}>
        <Weather />
        <AiOutlineUser size="36px" color="white" className={styles.aiOutlineUser} />
      </div>
    </div>
  );
};

export default Header;
