import NavBar from "../components/NavBar";
import styles from "../styles/Contact.module.css";
import Dither from "../components/Dither";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Contact = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.ditherContainer}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.02}
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Let&apos;s Connect <ArrowOutwardIcon className={styles.arrowIcon} /></h1>
        </div>
      </section>
    </div>
  );
}

export default Contact;
