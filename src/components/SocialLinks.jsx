import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import styles from '../styles/SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <motion.div
      className={styles.socialContainer}
      initial={{ opacity: 0, y: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: 'easeOut', delay: 2.4 }}
    >
      <a
        href="https://github.com/chamiruuu/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <GitHubIcon className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/chamirufernando"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <LinkedInIcon className={styles.icon} />
      </a>
      <div className={styles.verticalLine}></div>
    </motion.div>
  );
};

export default SocialLinks;