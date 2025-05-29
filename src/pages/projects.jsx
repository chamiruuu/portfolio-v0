import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";
import ShinyText from "../components/ShinyText";
import Beams from "../components/Beams";
import BentoCard from "../components/BentoCard";
import SplitText from "../components/SplitText";
import AnimatedParagraph from "../components/AnimatedParagraph";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.beamsBg}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className={styles.heroContent}>
          {/* Using SplitText for animating the title */}
          <SplitText text="Selected Work" className={styles.animatedTitle} />

          {/* Using AnimatedParagraph for the description text */}
          <AnimatedParagraph
            text="A curated collection of projects showcasing design thinking and technical execution."
            className={styles.animatedDescription}
          />

          {/* Animated button with motion */}
          <motion.a
            className={styles.viewProjectsBtn}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(`.${styles.projectsSectionOne}`)
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <ShinyText
              text="VIEW PROJECTS"
              disabled={false}
              speed={3}
              className={styles.viewProjectsBtnlink}
            />
          </motion.a>
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
