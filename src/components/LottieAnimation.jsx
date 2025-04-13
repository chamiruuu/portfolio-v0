import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../styles/LottieAnimation.module.css';

const LottieAnimation = () => {
  return (
    <div className={styles.lottieContainer}>
      <DotLottieReact
        src="https://lottie.host/65600732-9e29-40f3-8de6-41f2d3f5a927/NHDYfKbJ7v.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LottieAnimation;