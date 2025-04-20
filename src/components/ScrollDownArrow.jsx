import { useEffect, useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import styles from '../styles/ScrollDownArrow.module.css';

const ScrollDownArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`${styles.scrollArrow} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToContent}
      role="button"
      aria-label="Scroll down"
    >
      <span className={styles.parenthesis}>(</span>
      <KeyboardArrowDownRoundedIcon className={styles.icon} />
      <span className={styles.parenthesis}>)</span>
    </div>
  );
};

export default ScrollDownArrow;