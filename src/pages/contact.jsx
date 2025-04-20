import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.titleContainer}>
            <div className={styles.titleRow}>
              <div className={styles.titlePrefix}>LET&apos;S<br />CONNECT <hr /></div>
              <h1 className={styles.titleMain}>REACH ME</h1>
              <div className={styles.titleYear}>HERE <hr /></div>
            </div>
          </div>
        </div>
        <p className={styles.subtitle}>
          GOT A QUESTION OR A PROJECT IDEA? FEEL FREE TO REACH OUT
          <br />
          I&apos;M ALWAYS OPEN TO NEW OPPORTUNITIES AND CHATS ABOUT TECH AND CREATIVITY
        </p>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/chamiruuu/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className={styles.socialIcon} sx={{ fontSize: 40 }} />
          </a>
          <a href="https://www.linkedin.com/in/chamirufernando" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={styles.socialIcon} sx={{ fontSize: 40 }} />
          </a>
          <a href="mailto:your.email@example.com">
            <EmailIcon className={styles.socialIcon} sx={{ fontSize: 40 }} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.socialIcon} sx={{ fontSize: 40 }} />
          </a>
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Contact;