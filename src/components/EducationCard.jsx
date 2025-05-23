import styles from '../styles/EducationCard.module.css';
import iitLogo from '../assets/iit.png';
import sscLogo from '../assets/ssc.png'; 

const EducationTimeline = () => {
  return (
    <div className={styles.container}>
      {/* Horizontal line */}
      <div className={styles.horizontalLine}></div>
      
      {/* SVG for timeline connections */}
      <svg className={styles.timelineConnections} width="100%" height="200">
        {/* First connection */}
        <line x1="256" y1="80" x2="256" y2="133" stroke="white" strokeWidth="2" />
        <circle cx="256" cy="80" r="4" fill="white" />
        
        {/* Second connection */}
        <line x1="474" y1="80" x2="474" y2="24" stroke="white" strokeWidth="2" />
        <circle cx="474" cy="80" r="4" fill="white" />
        <circle cx="704" cy="24" r="4" fill="white" />
        <line x1="474" y1="24" x2="704" y2="24" stroke="white" strokeWidth="2" />
      </svg>
      
      {/* First Timeline Item */}
      <div className={styles.timelineItemFirst}>
        <div className={styles.date}>2010 - 2023</div>
        <div className={styles.institution}>St. Sebastian&apos;s College, Moratuwa</div>
        <div className={styles.subtext}>(Grade 01 - G.C.E Advanced Level Examination)</div>
      </div>
      
      {/* First Logo */}
      <div className={styles.logoFirst}>
        <img src={sscLogo} alt="St. Sebastian's College Logo" />
      </div>
      
      {/* Second Timeline Item */}
      <div className={styles.timelineItemSecond}>
        <div className={styles.date}>2024 - 2025</div>
        <div className={styles.institution}>Informatics Institute of Technology</div>
        <div className={styles.subtext}>(Foundation Certificate in Higher Education - IT | Computer Science)</div>
      </div>
      
      {/* Second Logo */}
      <div className={styles.logoSecond}>
        <img src={iitLogo} alt="IIT Logo" />
      </div>
    </div>
  );
};

export default EducationTimeline;