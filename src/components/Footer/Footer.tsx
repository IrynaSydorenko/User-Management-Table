import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Iryna Sydorenko's users list. All rights reserved.</p>
      <p>
        Contact:{' '}
        <a href='mailto:iryna.sydorenko1998@gmail.com'>
          iryna.sydorenko1998@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
