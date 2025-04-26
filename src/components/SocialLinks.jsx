import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../styles/SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <a href="https://github.com/chamiruuu/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <GitHubIcon className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/chamirufernando" target="_blank" rel="noopener noreferrer" className="social-icon">
        <LinkedInIcon className={styles.icon} />
      </a>
      <div className={styles.verticalLine}></div>
    </div>
  );
};

export default SocialLinks;