import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.section}>
        <p className={styles.text}>
        Feel free to drop me a line with project
details. Pleasure to help you
with your project!
        </p>
      </div>
      
      <div className={styles.section}>
        <p className={styles.text}>
          Based in Sri Lanka
          <br />
          Open to work anywhere
        </p>
      </div>
      
      <div className={styles.section}>
        <ul className={styles.links}>
          <li><a href="#linkedin">LinkedIn</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#mail">Mail</a></li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <p className={styles.text}>
          Discover my other 
          <br />
          gallery
          <br />
          3d playground
        </p>
      </div>
      
      <div className={styles.section}>
        <p className={`${styles.text} ${styles.signature}`}>
          Always made by love
          <br />
          by chamirurf.
          <br />
          2025 ©
        </p>
      </div>
    </footer>
  );
};

export default Footer;