import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="src/assets/logo.svg" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className={styles.iconContainer}>
        <TranslateRoundedIcon className={styles.icon} />
        <LightModeRoundedIcon className={styles.icon} />
      </div>
    </nav>
  );
}

export default NavBar;