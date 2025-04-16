import styles from '../styles/NavBar.module.css';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="src/assets/logo.svg" alt="Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.iconContainer}>
        <TranslateRoundedIcon className={styles.icon} />
        <LightModeRoundedIcon className={styles.icon} />
      </div>
    </nav>
  );
}

export default NavBar;