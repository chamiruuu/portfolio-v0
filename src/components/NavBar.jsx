import { useState, useEffect } from 'react';
import styles from '../styles/NavBar.module.css';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isCollapsed = window.scrollY > 50;
      setCollapsed(isCollapsed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the page is loaded scrolled down

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={`${styles.logo} ${collapsed ? styles.hidden : ''}`}>
          <a href="/">LOGO</a>
        </div>

        <nav className={styles.navLinks}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className={`${styles.actionIcons} ${collapsed ? styles.hidden : ''}`}>
          <a href="#search" className={styles.icon}>🔍</a>
          <a href="#account" className={styles.icon}>👤</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;