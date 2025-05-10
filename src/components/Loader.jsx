import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Loader.module.css";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [readyToFade, setReadyToFade] = useState(false);
  const [fadeDone, setFadeDone] = useState(false);

  // Step 1: Increment progress to 100%
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setReadyToFade(true), 300); // give a moment for bar to reach 100%
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Step 2: Once fade is done, call onFinish
  useEffect(() => {
    if (fadeDone) {
      onFinish(); // callback to show the Home component
    }
  }, [fadeDone, onFinish]);

  return (
    <AnimatePresence>
      {!fadeDone && (
        <motion.div
          className={styles.loaderWrapper}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bottomText}>
            <span className={styles.loadingLabel}>LOADING {progress}%</span>
          </div>
          <div className={styles.progressLineWrapper}>
            <motion.div
              className={styles.progressLine}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>

          {/* Trigger fade-out overlay after progress reaches 100 */}
          {readyToFade && (
            <motion.div
              className={styles.fadeOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={() => setFadeDone(true)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
