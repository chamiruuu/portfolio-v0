import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ image, title, description, technologies, githubLink }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.projectImage} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.readMore}>Read More</button>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired
};

export default ProjectCard;