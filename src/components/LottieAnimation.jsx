import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import styles from '../styles/LottieAnimation.module.css';

const LottieAnimation = () => {
  return (
    <motion.div
      className={styles.lottieContainer}
      initial={{ opacity: 0, y: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: 'easeOut', delay: 2.2 }}
    >
      <DotLottieReact
        src="https://lottie.host/65600732-9e29-40f3-8de6-41f2d3f5a927/NHDYfKbJ7v.lottie"
        loop
        autoplay
      />
    </motion.div>
  );
};

export default LottieAnimation;