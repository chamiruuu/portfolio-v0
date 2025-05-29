import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/NavBar.module.css";
import { MdLightMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";


import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className={styles.logoImage}
          />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.iconContainer}>
        <IoLanguage className={styles.icon} />
        <MdLightMode className={styles.icon} />
      </div>
    </motion.nav>
  );
};

export default NavBar;
