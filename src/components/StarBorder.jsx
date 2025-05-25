import PropTypes from 'prop-types';
import styles from "../styles/StarBorder.module.css";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component className={`${styles.starBorderContainer} ${className}`} {...rest}>
      <div
        className={styles.borderGradientBottom}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={styles.borderGradientTop}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={styles.innerContent}>{children}</div>
    </Component>
  );
};

StarBorder.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.string,
  speed: PropTypes.string,
  children: PropTypes.node,
};

export default StarBorder;
