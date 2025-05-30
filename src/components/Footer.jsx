import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.section}>
        <p className={styles.text}>
          Got a project in mind? Reach out anytime — I’d be glad to collaborate with you!
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
          <li>
            <a href="#linkedin">LinkedIn</a>
          </li>
          <li>
            <a href="#github">GitHub</a>
          </li>
          <li>
            <a href="#mail">Mail</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <p className={styles.text}>
          Discover my other
          <br />
          &nbsp;&nbsp;Gallery
          <br />
          &nbsp;&nbsp;8pointeightstudios
        </p>
      </div>

      <div className={styles.section}>
        <p className={`${styles.text} ${styles.signature}`}>
          From concept to screen
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
