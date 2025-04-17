import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';
import abtheroimg from '../assets/abtheroimg.png';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.imageLinksWrapper}>
          <div className={styles.verticalLinksContainer}>
            <a href="#" className={`${styles.verticalLink} ${styles.gallery}`}>GALLERY</a>
            <a href="#" className={`${styles.verticalLink} ${styles.playground}`}>PLAYGROUND</a>
            <a href="#" className={`${styles.verticalLink} ${styles.threedimensional}`}>THREEDIMENSIONAL</a>
          </div>
          <img src={abtheroimg} alt="Hero" className={styles.heroImage} />
        </div>
        <div className={styles.heroText}>
          <div style={{ width: '100%' }}>
            <div>I&apos;M CHAMIRURF - A 20 YEARS OLD</div>
            <div>DEVELOPER</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;