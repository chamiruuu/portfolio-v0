import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/EducationalTimeline.module.css';
import sscLogo from '../assets/ssc.avif';
import iitLogo from '../assets/iit.avif';
import lineDown from '../assets/Line 11.svg';
import lineUp from '../assets/Line 12.svg';

const EducationTimeline = () => { 
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.8 });
  const mainBranchControls = useAnimation();
  const connector1Controls = useAnimation();
  const logo1Controls = useAnimation();
  const text1Controls = useAnimation();
  const connector2Controls = useAnimation();
  const logo2Controls = useAnimation();
  const text2Controls = useAnimation();

  // Animation sequencing: mainbranch -> content1 -> content2
  const [content1Visible, setContent1Visible] = useState(false);
  const [content2Visible, setContent2Visible] = useState(false);

  useEffect(() => {
    if (inView) {
      (async () => {
        await mainBranchControls.start({ scaleX: 1, transition: { duration: 1.4, ease: 'easeInOut' } });
        setContent1Visible(true);
      })();
    }
  }, [inView, mainBranchControls]);

  useEffect(() => {
    if (content1Visible) {
      (async () => {
        await connector1Controls.start({ scaleX: 1, transition: { duration: 0.5, ease: 'easeInOut' } });
        await logo1Controls.start({ opacity: 1, transition: { duration: 0.4 } });
        await text1Controls.start({ opacity: 1, transition: { duration: 0.6 } });
        setContent2Visible(true);
      })();
    }
  }, [content1Visible, connector1Controls, logo1Controls, text1Controls]);

  useEffect(() => {
    if (content2Visible) {
      (async () => {
        await connector2Controls.start({ scaleX: 1, transition: { duration: 0.5, ease: 'easeInOut' } });
        await logo2Controls.start({ opacity: 1, transition: { duration: 0.4 } });
        await text2Controls.start({ opacity: 1, transition: { duration: 0.6 } });
      })();
    }
  }, [content2Visible, connector2Controls, logo2Controls, text2Controls]);

  return (
    <section className={styles.timelineSection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.mainbranch}
          initial={{ scaleX: 0 }}
          animate={mainBranchControls}
          style={{ originX: 0 }}
        />
        {content1Visible && (
          <div className={styles.content1}>
            <motion.div
              className={styles.connectordown}
              initial={{ scaleX: 0 }}
              animate={connector1Controls}
              style={{ originX: 0 }}
            >
              <img className={styles.connectorline} src={lineDown} alt="Connector line down" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={logo1Controls}
              className={styles.logo}
            >
              <img className={styles.logo} src={sscLogo} alt="St. Sebastian's College logo" />
            </motion.div>
            <motion.div
              className={styles.text}
              initial={{ opacity: 0 }}
              animate={text1Controls}
              transition={{ duration: 0.6 }}
            >
              <h3 className={styles.timelineSubheading}>2010 - 2023</h3>
              <h2 className={styles.timelineHeading}>St. Sebastian&apos;s College, Moratuwa</h2>
              <span className={styles.timelineSpan}>(Grade 01 - G.C.E Advanced Level Examination)</span>
            </motion.div>
          </div>
        )}
        {content2Visible && (
          <div className={styles.content2}>
            <motion.div
              className={styles.connectorup}
              initial={{ scaleX: 0 }}
              animate={connector2Controls}
              style={{ originX: 0 }}
            >
              <img className={styles.connectorline} src={lineUp} alt="Connector line up" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={logo2Controls}
              className={styles.logo}
            >
              <img className={styles.logo} src={iitLogo} alt="IIT logo" />
            </motion.div>
            <motion.div
              className={styles.text}
              initial={{ opacity: 0 }}
              animate={text2Controls}
              transition={{ duration: 0.6 }}
            >
              <h3 className={styles.timelineSubheading}>2024 - 2025</h3>
              <h2 className={styles.timelineHeading}>Informatics Institute of Technology</h2>
              <span className={styles.timelineSpan}>(Foundation Certificate in Higher Education - IT | Computer Science)</span>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationTimeline;