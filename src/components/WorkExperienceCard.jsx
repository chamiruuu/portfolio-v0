import PropTypes from 'prop-types';
import styles from '../styles/WorkExperienceCard.module.css';

const WorkExperienceCard = ({
  company = "V3 Global Holdings",
  companyDescription = "Student Employment",
  position = "Digital Marketing Executive",
  duration = "March 2025 - Present · 1 mos",
  location = "Colombo, Sri Lanka",
  employmentType = "Part Time",
  website = "www.v3global.com",
  description = "As an Associate Web Developer at Izatic, I work remotely to develop websites, focusing on transforming provided UI designs into fully functional websites using WordPress. My role includes customizing themes and ensuring websites are optimized for performance and responsiveness. I collaborate with a team to deliver high-quality web solutions tailored to client needs."
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sec1}>
        <h1>{company}</h1>
        <span>{companyDescription}</span>
        <span>{duration}</span>
      </div>
      <div className={styles.sec2}>
        <span>Position - {position}</span>
        <span>Location - {location}</span>
        <span>Employment type - {employmentType}</span>
        <span>Website - {website}</span>
      </div>
      <div className={styles.sec3}>
        <p>{description}</p>
      </div>
      <div className={styles.glowLine}></div>
    </div>
  );
};

WorkExperienceCard.propTypes = {
  company: PropTypes.string,
  companyDescription: PropTypes.string,
  position: PropTypes.string,
  duration: PropTypes.string,
  location: PropTypes.string,
  employmentType: PropTypes.string,
  website: PropTypes.string,
  description: PropTypes.string
};

export default WorkExperienceCard;