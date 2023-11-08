import React from 'react';
import Link from 'next/link';

import styles from'../styles/menu.module.css' 

const Menu = () => {
  return (
    <div className={styles['menu-container']}>
      <Link href="/login">
        <button className={styles['menu-button']}>Login</button>
      </Link>

      <Link href="/">
        <button className={styles['menu-button']}>Inicio</button>
      </Link>

      <Link href="/home">
        <button className={styles['menu-button']}>Home</button>
      </Link>
    </div>
  );
};

export default Menu;
