import NavBar from "../components/NavBar";
import styles from "../styles/Contact.module.css";
import Footer from "../components/Footer";
import { useRef } from 'react';
import VariableProximity from "../components/VariableProximity";
import { motion } from "framer-motion";

const Contact = () => {
  const containerRef = useRef(null);
  
  // Animation configurations
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };
  
  const paragraphsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8, // Start after heading animation finishes
        staggerChildren: 0.2
      }
    }
  };
  
  const paragraphItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const socialLinksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.7, // Start after paragraphs finish
        staggerChildren: 0.1
      }
    }
  };
  
  const socialItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <h1 ref={containerRef} style={{ position: 'relative' }}>
              <VariableProximity
                label="Coffee, Code & Collabs"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </h1>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={paragraphsContainerVariants}
          >
            <motion.p variants={paragraphItemVariants}>Have something in mind? Let&apos;s talk. Whether it&apos;s a small project or a big vision,</motion.p>
            <motion.p variants={paragraphItemVariants}>I&apos;m open to freelance opportunities and collaborations.</motion.p>
            <motion.p variants={paragraphItemVariants}>Even if you&apos;re just curious about what I do – don&apos;t hesitate to get in touch.</motion.p>
          </motion.div>
          
          <motion.div 
            className={styles.socialLinks}
            initial="hidden"
            animate="visible"
            variants={socialLinksContainerVariants}
          >
            <motion.a variants={socialItemVariants} href="https://linkedin.com/in/yourprofile">LinkedIn</motion.a>
            <motion.span variants={socialItemVariants}>✦︎</motion.span>
            <motion.a variants={socialItemVariants} href="mailto:your@email.com">Mail</motion.a>
            <motion.span variants={socialItemVariants}>✦︎</motion.span>
            <motion.a variants={socialItemVariants} href="https://instagram.com/yourprofile">Instagram</motion.a>
            <motion.span variants={socialItemVariants}>✦︎</motion.span>
            <motion.a variants={socialItemVariants} href="https://github.com/yourprofile">Github</motion.a>
          </motion.div>
        </div>
      </section>
      <Footer className={styles.footer}/>
    </div>
  );
}

export default Contact;