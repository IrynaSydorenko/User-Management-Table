import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Iryna Sydorenko's users list</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
