import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Contact = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <section className={styles.secondSection}>
        <h2 className={styles.aboutTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          CONTACT ME
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        <p className={styles.aboutContent}>
          Feel free to reach out to me for any questions or collaboration opportunities. 
          I&apos;m always excited to work on new projects and connect with fellow developers.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;