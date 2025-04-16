import Marquee from 'react-fast-marquee';
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaWordpress,
  FaNode, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';
import PropTypes from 'prop-types';
import styles from '../styles/TechMarquee.module.css';

const TechMarquee = ({ className }) => {
  const technologies = [
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
    { icon: FaNode, name: 'Node.js', color: '#339933' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: FaDocker, name: 'Docker', color: '#2496ED' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
    { icon: FaNode, name: 'Node.js', color: '#339933' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: FaDocker, name: 'Docker', color: '#2496ED' }
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