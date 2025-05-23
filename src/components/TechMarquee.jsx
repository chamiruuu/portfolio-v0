import Marquee from 'react-fast-marquee';
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaWordpress,
  FaGitAlt 
} from 'react-icons/fa';
import { SiBootstrap, SiFigma, SiFramer, SiMysql } from 'react-icons/si';
import PropTypes from 'prop-types';
import styles from '../styles/TechMarquee.module.css';

const TechMarquee = ({ className }) => {
  const technologies = [
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
    { icon: SiFigma, name: 'Figma', color: '#d1d1d1' },
    { icon: SiFramer, name: 'Framer', color: '#0055FF' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    // Duplicate the list for continuous scrolling
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
    { icon: SiFigma, name: 'Figma', color: '#d1d1d1' },
    { icon: SiFramer, name: 'Framer', color: '#0055FF' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' }
  ];

  return (
    <div className={`${styles.marqueeWrapper} ${className || ''}`}>
      <Marquee
        gradient={false}
        speed={50}
        direction="left"
        gap={0}
        pauseOnHover={false}
        style={{ overflow: 'hidden' }}
      >
        <div className={styles.techList}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <tech.icon className={styles.techIcon} style={{ color: tech.color }} />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

TechMarquee.propTypes = {
  className: PropTypes.string
};

export default TechMarquee;