import { useEffect, useRef, useState } from 'react';
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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      // Only handle scroll events when not already scrolling
      if (!isScrolling) {
        const heroRect = heroSectionRef.current.getBoundingClientRect();
        const secondRect = secondSectionRef.current.getBoundingClientRect();
        
        // Check if we're in the hero section and scrolling down
        if (heroRect.top <= 0 && heroRect.bottom > 0 && event.deltaY > 0) {
          event.preventDefault();
          setIsScrolling(true);
          
          // Smooth scroll to the second section
          secondSectionRef.current.scrollIntoView({ 
            behavior: 'smooth',
          });
          
          // Reset isScrolling after animation completes
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000); // Adjust timing to match your scroll animation duration
        }
        
        // Check if we're in the second section and scrolling up
        else if (secondRect.top <= 100 && secondRect.top >= -100 && event.deltaY < 0) {
          event.preventDefault();
          setIsScrolling(true);
          
          // Smooth scroll to the hero section
          heroSectionRef.current.scrollIntoView({ 
            behavior: 'smooth',
          });
          
          // Reset isScrolling after animation completes
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    };

    // Attach the event listener
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]);

  // Function to handle click on scroll indicators
  const handleScrollToSection = (ref) => {
    setIsScrolling(true);
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

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
        <div 
          className={styles.scrollIndicator}
          onClick={() => handleScrollToSection(secondSectionRef)}
        >
        </div>
      </section>

      <section ref={secondSectionRef} className={styles.secondSection}>
        <div 
          className={styles.scrollUpIndicator}
          onClick={() => handleScrollToSection(heroSectionRef)}
        >
        </div>
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
            description="A simple python script with GUI to make file sorting easy."
            technologies={["Python", "CustomTinker"]}
            repoUrl="https://github.com/yourusername/sortlify"
          />
          <ProjectCard 
            title="Project Two"
            description="A web-based project showcasing React and MongoDB integration."
            technologies={["React", "Node.js", "MongoDB"]}
            repoUrl="https://github.com/yourusername/project-two"
          />
          <ProjectCard 
            title="Project Three"
            description="A robust backend system built with TypeScript and PostgreSQL."
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