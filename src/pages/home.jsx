import { useRef } from 'react';
import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';
import LottieAnimation from '../components/LottieAnimation';
import ProjectCard from '../components/ProjectCard';
import TechMarquee from '../components/TechMarquee';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import '../styles/Fonts.css';
import styles from '../styles/Home.module.css';

const Home = () => {
  const heroSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      
      <section ref={heroSectionRef} className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Chamiru Fernando</h1>
          <span className={styles.subtext}>PORTFOLIO</span>
        </div>
        <SocialLinks />
        <LottieAnimation />
      </section>

      <section ref={secondSectionRef} className={styles.secondSection}>
        <h2 className={styles.aboutTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          ABOUT ME
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        <p className={styles.aboutContent}>
          I&apos;m a passionate Full Stack Developer with expertise in crafting seamless web experiences. My journey in software development has equipped me with a strong foundation in both front-end and back-end technologies. I thrive on turning complex problems into elegant solutions and am constantly exploring new technologies to enhance my skill set.
        </p>

        <h3 className={styles.projectsLabel}>PROJECTS</h3>
        <h2 className={styles.projectsTitle}>Selected Projects</h2>
        <p className={styles.projectsSubtitle}>
          Here&apos;s a curated selection showcasing my expertise and the achieved results.
        </p>

        <div className={styles.projectsGrid}>
          <ProjectCard 
            title="Sortlify"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy. A simple python script that is with GUI, the function of the script is to make sorting files easy. A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["Python", "CustomTinker"]}
            repoUrl="https://github.com/yourusername/sortlify"
          />
          <ProjectCard 
            title="Project Two"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy. A simple python script that is with GUI, the function of the script is to make sorting files easy. A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["React", "Node.js", "MongoDB"]}
            repoUrl="https://github.com/yourusername/project-two"
          />
          <ProjectCard 
            title="Project Three"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy. A simple python script that is with GUI, the function of the script is to make sorting files easy. A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["TypeScript", "Express", "PostgreSQL"]}
            repoUrl="https://github.com/yourusername/project-three"
          />
        </div>

        <TechMarquee className={styles.TechMarquee} />
      </section>

      <section className={styles.thirdSection}>
        <h3 className={styles.articlesLabel}>ARTICLES</h3>
        <h2 className={styles.articlesTitle}>Selected articles</h2>
        <p className={styles.articlesSubtitle}>
          Here&apos;s a curated selection showcasing my expertise and the achieved results.
        </p>

        <div className={styles.articleGrid}>
          <ArticleCard 
            category="TUTORIAL"
            tags="MATH | JAVASCRIPT"
            title="How to map a number between two ranges"
            readTime="5 minute read"
            lastUpdated="October 18, 2023"
            link="#"
          />
          <ArticleCard 
            category="GUIDE"
            tags="REACT | TYPESCRIPT"
            title="Building Custom React Hooks"
            readTime="8 minute read"
            lastUpdated="March 15, 2024"
            link="#"
          />
          <ArticleCard 
            category="TUTORIAL"
            tags="NODE.JS | EXPRESS"
            title="Creating a REST API with Express"
            readTime="10 minute read"
            lastUpdated="April 1, 2024"
            link="#"
          />
          <ArticleCard 
            category="GUIDE"
            tags="REACT | TYPESCRIPT"
            title="Building Custom React Hooks"
            readTime="8 minute read"
            lastUpdated="March 15, 2024"
            link="#"
          />
          <ArticleCard 
            category="TUTORIAL"
            tags="NODE.JS | EXPRESS"
            title="Creating a REST API with Express"
            readTime="10 minute read"
            lastUpdated="April 1, 2024"
            link="#"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;