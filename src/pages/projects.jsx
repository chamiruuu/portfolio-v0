import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShinyText from "../components/ShinyText";
import Beams from "../components/Beams";

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
            noiseIntensity={1.75}
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
