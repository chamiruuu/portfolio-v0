import React, { useState, useEffect } from 'react';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsCollapsed(true);
        } else {
            setIsCollapsed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ''}`} id="navbar">
            <div className={`${styles.logo} ${isCollapsed ? styles.hidden : ''}`} id="logo">chamirurf</div>
            <ul className={styles.navLinks} id="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <div className={`${styles.iconButtons} ${isCollapsed ? styles.hidden : ''}`} id="icon-buttons">
                <button className={styles.iconBtn} id="theme-toggle">🌓</button>
                <button className={styles.iconBtn} id="language-toggle">🌐</button>
            </div>
        </nav>
    );
}

export default NavBar;