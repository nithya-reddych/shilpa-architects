"use client";

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2024 All rights reserved</p>
      <p>|</p>

      <Link href="/privacy-policy" className={styles.privacyLink}>
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
