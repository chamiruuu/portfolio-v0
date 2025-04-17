import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';

const Projects = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <section className={styles.secondSection}>
        <h3 className={styles.projectsLabel}>PROJECTS</h3>
        <h2 className={styles.projectsTitle}>Selected Projects</h2>
        <p className={styles.projectsSubtitle}>Here&apos;s a curated selection showcasing my expertise and the achieved results.</p>
        
        <div className={styles.projectsGrid}>
          <ProjectCard 
            title="Sortlify"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["Python", "CustomTinker"]}
            repoUrl="https://github.com/yourusername/sortlify"
          />
          <ProjectCard 
            title="Project Two"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["React", "Node.js", "MongoDB"]}
            repoUrl="https://github.com/yourusername/project-two"
          />
          <ProjectCard 
            title="Project Three"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["TypeScript", "Express", "PostgreSQL"]}
            repoUrl="https://github.com/yourusername/project-three"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;