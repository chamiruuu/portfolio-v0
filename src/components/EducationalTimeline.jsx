import styles from '../styles/EducationalTimeline.module.css';
import sscLogo from '../assets/ssc.avif';
import iitLogo from '../assets/iit.avif';
import lineDown from '../assets/Line 11.svg';
import lineUp from '../assets/Line 12.svg';

const EducationTimeline = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainbranch}></div>
        <div className={styles.content1}>
          <div className={styles.connectordown}>
            <img className={styles.connectorline} src={lineDown} alt="Connector line down" />
          </div>
          <div><img className={styles.logo} src={sscLogo} alt="St. Sebastian's College logo" /></div>
          <div className={styles.text}>
            <h3>2010 - 2023</h3>
            <h2>St. Sebastian&apos;s College, Moratuwa</h2>
            <span>(Grade 01 - G.C.E Advanced Level Examination)</span>
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.connectorup}>
            <img className={styles.connectorline} src={lineUp} alt="Connector line up" />
          </div>
          <div><img className={styles.logo} src={iitLogo} alt="IIT Logo" /></div>
          <div className={styles.text}>
            <h3>2024 - 2025</h3>
            <h2>Informatics Institute of Technology</h2>
            <span>(Foundation Certificate in Higher Education - IT | Computer Science)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
