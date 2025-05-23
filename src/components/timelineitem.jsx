import styles from '../styles/Timeline.module.css';

const TimelineItem = ({
  logo,
  yearRange,
  institutionName,
  degree,
  isFirst, // To handle the initial connection to the main line differently if needed
  isLast, // To handle the end of the line if needed
  logoStyle // To allow custom styles for the logo, like the red shield
}) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.itemConnector}>
        <div className={styles.dot}></div>
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.itemContent}>
        {logo && (
          <img
            src={logo}
            alt={`${institutionName} logo`}
            className={styles.logo}
            style={logoStyle}
          />
        )}
        {!logo && logoStyle && ( // For the shield-like placeholder
          <div className={styles.logoPlaceholder} style={logoStyle}>
            {/* You might want to add an icon or text inside the shield if needed */}
          </div>
        )}
        <div className={styles.yearRange}>{yearRange}</div>
        <div className={styles.institutionName}>{institutionName}</div>
        <div className={styles.degree}>{degree}</div>
      </div>
    </div>
  );
};

export default TimelineItem;