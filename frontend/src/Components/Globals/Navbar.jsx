import React from 'react';
import Button from '../Generics/Button';
import Logo from './Logo';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.Navbar}>
      <Logo />
      <Button className={styles.btn} onClick={() => {}}>Home</Button>
      <Button className={styles.btn} onClick={() => {}}>Menu</Button>
      <Button className={styles.btn} onClick={() => {}}>Cart</Button>
      <img className={styles.avatar} alt="avatar" />
    </header>
  );
}
export default Navbar;
