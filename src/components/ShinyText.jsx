import styles from '../styles/ShinyText.module.css';
import PropTypes from 'prop-types';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`${styles['shiny-text']} ${disabled ? styles.disabled : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

ShinyText.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  speed: PropTypes.number,
  className: PropTypes.string
};

export default ShinyText;
