import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";
import ShinyText from "../components/ShinyText";
import Beams from "../components/Beams";
import BentoCard from "../components/BentoCard";

const Projects = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.beamsBg}>
          <Beams
            beamWidth={18}
            beamHeight={150}
            beamNumber={1}
            lightColor="#ffffff"
            speed={6}
            noiseIntensity={4}
            scale={0.1}
            rotation={30}
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Selected Work</h1>
          <span>
            A curated collection of projects showcasing design thinking and
            technical execution.
          </span>
          <a
            className={styles.viewProjectsBtn}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(`.${styles.projectsSectionOne}`)
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#"
          >
            <ShinyText
              text="VIEW PROJECTS"
              disabled={false}
              speed={3}
              className={styles.viewProjectsBtnlink}
            />
          </a>
        </div>
      </section>

      <section className={styles.projectsSectionOne}>
        <BentoCard />
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
