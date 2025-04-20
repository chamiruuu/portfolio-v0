import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollDownArrow from '../components/ScrollDownArrow';
import styles from '../styles/Projects.module.css';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.titleContainer}>
            <div className={styles.titleRow}>
              <div className={styles.titlePrefix}>SOME<br />SELECTED <hr /></div>
              <h1 className={styles.titleMain}>PROJECTS</h1>
              <div className={styles.titleYear}>2025 <hr /></div>
            </div>
          </div>
        </div>
        <p className={styles.subtitle}>
          IN HERE I&apos;M SHARING SOME OF MY PROJECTS
          <br />
          THAT I HAVE BEEN WORKED ON AND WORKING ON.
        </p>
        <ScrollDownArrow />
      </section>

      <section className={styles.projectsSectionOne}>
        <div className={styles.projectDetails}>
          <span className={styles.date}>~ 2024 DEC</span>
          <h2 className={styles.projectTitle}>Invoice Generator</h2>
          <p className={styles.projectDescription}>
          A simple python script that is with GUI the functionof the script is to make sorting files easy A simplepython script that is with GUI the function of thescript is to make sorting files easyA simple pythonscript that is with GUI the function of the script is to make sorting files easy A simple python script that is with GUI the function of the script is to make sorting files easy <br />A simple python script that is with GUI the functionof the script is to make sorting files easy A simplepython script that is with GUI the function of thescript is to make sorting files easyA simple pythonscript that is with GUI the function of the script is to make sorting files easy A simple python script that is with GUI the function of the script is to make sorting files easyA simple python script that is with.
          </p>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>
              To find out more <KeyboardDoubleArrowRightRoundedIcon className={styles.rightArrow} />
            </a>
            <a href="https://github.com/yourusername/project" className={styles.githubLink} target="_blank" rel="noopener noreferrer">
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