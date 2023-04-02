import React from 'react';
import styles from './Navbar.module.css';

function Logo() {
  return (
    <a href="./index.html"><img src="../../logo.svg" className={styles.logo} alt="logo" /></a>
  );
}
export default Logo;
