"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../app/globals.css';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  
  const linkMap: Record<string, string> = {
    '/': 'home-link',
    '/works': 'projects-link',
    '/contact': 'contact-link',
    '/team': 'team-link',
    '/gallery': 'gallery-link',
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/logo-1.png" alt="Logo" className={styles.logoImg} />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" id="home-link" className={`${styles.navLink} ${pathname === '/' ? styles.currentPage : ''}`}>Home</Link>
        <Link href="/works" id="projects-link" className={`${styles.navLink} ${pathname === '/works' ? styles.currentPage : ''}`}>Projects</Link>
        <Link href="/team" id="team-link" className={`${styles.navLink} ${pathname === '/team' ? styles.currentPage : ''}`}>Team</Link>
        <Link href="/contact" id="contact-link" className={`${styles.navLink} ${pathname === '/contact' ? styles.currentPage : ''}`}>Contact</Link>
        <Link href="/gallery" id="gallery-link" className={`${styles.navLink} ${pathname === '/gallery' ? styles.currentPage : ''}`}>Gallery</Link>
      </div>
    </nav>
  );
};

export default Navbar;
