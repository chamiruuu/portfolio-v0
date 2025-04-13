import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';
import LottieAnimation from '../components/LottieAnimation';
import ProjectCard from '../components/ProjectCard';
import '../styles/Fonts.css';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.title}>chamiru fernando</h1>
          <span className={styles.subtext}>PORTFOLIO</span>
        </div>
        <SocialLinks />
        <LottieAnimation />
      </section>

      <section className={styles.secondSection}>
        <h2 className={styles.aboutTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          ABOUT ME
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        <p className={styles.aboutContent}>
          I'm a passionate Full Stack Developer with expertise in crafting seamless web experiences. My journey in software development has equipped me with a strong foundation in both front-end and back-end technologies. I thrive on turning complex problems into elegant solutions and am constantly exploring new technologies to enhance my skill set.
        </p>

        <h3 className={styles.projectsLabel}>PROJECTS</h3>
        <h2 className={styles.projectsTitle}>Selected Projects</h2>
        <p className={styles.projectsSubtitle}>Here&apos;s a curated selection showcasing my expertise and the achieved results.</p>
        
        <div className={styles.projectsGrid}>
        </div>
        
        <button className={styles.viewAllButton}>View all projects</button>
      </section>
    </div>
  );
};

export default Home;
