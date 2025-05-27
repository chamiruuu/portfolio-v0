import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollDownArrow from "../components/ScrollDownArrow";
import styles from "../styles/Projects.module.css";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const fullText = "that i have worked on and working on";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // No need to memoize BackgroundBeams as it's already wrapped in React.memo

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 75); // Slowed down typing animation for better performance
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [index, fullText]);

  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>PROJECTS</h1>
          <span>
            {typedText}
            {!isTypingComplete && <span className={styles.cursor}>|</span>}
          </span>
        </motion.div>
        <ScrollDownArrow />
      </section>

      <section className={styles.projectsSectionOne}>
        <div className={styles.projectDetails}>
          <span className={styles.date}>~ 2024 DEC</span>
          <h2 className={styles.projectTitle}>Invoice Generator</h2>
          <p className={styles.projectDescription}>
            A simple python script that is with GUI the function of the script
            is to make sorting files easy. A simple python script that is with
            GUI the function of the script is to make sorting files easy. A
            simple python script that is with GUI the function of the script is
            to make sorting files easy. A simple python script that is with GUI
            the function of the script is to make sorting files easy. A simple
            python script that is with GUI the function of the script is to make
            sorting files easy.
          </p>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>
              To find out more{" "}
              <KeyboardDoubleArrowRightRoundedIcon
                className={styles.rightArrow}
              />
            </a>
            <a
              href="https://github.com/yourusername/project"
              className={styles.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className={styles.githubIcon} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
