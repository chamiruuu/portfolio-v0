import PropTypes from 'prop-types';
import styles from "../styles/ArticleCard.module.css";
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';

const ArticleCard = ({
  category = "TUTORIAL",
  tags = "MATH | JAVASCRIPT",
  title = "How to map a number between two ranges",
  readTime = "5 minute read",
  lastUpdated = "October 18, 2023",
  link = "#",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.toptxt}>
        <h1>{category}</h1>
        <h1>{tags}</h1>
      </div>
      <div className={styles.description}>
        <h1>{title}</h1>
      </div>
      <div className={styles.details}>
        <span>{readTime}</span>
        <span>Last updated {lastUpdated}</span>
        <button onClick={() => window.location.href = link}>READ MORE<ReadMoreRoundedIcon className={styles.arrowIcon} /></button>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  category: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
  readTime: PropTypes.string,
  lastUpdated: PropTypes.string,
  link: PropTypes.string
};

export default ArticleCard;