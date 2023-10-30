import React from 'react';
import Link from 'next/link';

import styles from'../styles/menu.module.css' 

const Menu = () => {
  return (
    <div className={styles['menu-container']}>
      <Link href="/login">
        <button className={styles['menu-button']}>Login</button>
      </Link>
     
    </div>
  );
};

export default Menu;
