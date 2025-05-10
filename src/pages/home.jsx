import { useRef, useState, useEffect } from "react";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import SocialLinks from "../components/SocialLinks";
import LottieAnimation from "../components/LottieAnimation";
import ProjectCard from "../components/ProjectCard";
import TechMarquee from "../components/TechMarquee";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import SplitText from "../components/SplitText";
import "../styles/Fonts.css";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  const heroSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const [loadingDone, setLoadingDone] = useState(false);

  // Animation Variants
  const projectContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!loadingDone) return <Loader onFinish={() => setLoadingDone(true)} />;

  return (
    <div className={styles.homeContainer}>
      <NavBar />

      <section ref={heroSectionRef} className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Chamiru Fernando</h1>
          <motion.span
            className={styles.subtext}
            initial={{ opacity: 0, y: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
          >
            PORTFOLIO
          </motion.span>
        </div>
        <SocialLinks />
        <LottieAnimation />
      </section>

      <section ref={secondSectionRef} className={styles.secondSection}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className={styles.aboutTitleSymbol}>~</span>
          ABOUT ME
          <span className={styles.aboutTitleSymbol}>~</span>
        </motion.h2>
        <p className={styles.aboutContent}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={20}
          >
            I&apos;m a passionate Full Stack Developer with expertise in
            crafting seamless web experiences. My journey in software
            development has equipped me with a strong foundation in both
            front-end and back-end technologies. I thrive on turning complex
            problems into elegant solutions and am constantly exploring new
            technologies to enhance my skill set.
          </ScrollReveal>
        </p>

        <motion.h3
          className={styles.projectsLabel}
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          PROJECTS
        </motion.h3>
        <SplitText text="Selected Projects" className={styles.projectsTitle} />
        <motion.p
          className={styles.projectsSubtitle}
          initial={{ opacity: 0, y: 0, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Here&apos;s a curated selection showcasing my expertise and the
          achieved results.
        </motion.p>

        <motion.div
          className={styles.projectsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={projectContainerVariants}
        >
          <ProjectCard
            title="Sortlify"
            description="A simple python script that is with GUI the function of the script is to make sorting files easy."
            technologies={["Python", "CustomTinker"]}
            repoUrl="https://github.com/yourusername/sortlify"
            animationVariants={projectCardVariants}
          />
          <ProjectCard
            title="Project Two"
            description="A web application built with the MERN stack to demonstrate real-time data manipulation and responsive design."
            technologies={["React", "Node.js", "MongoDB"]}
            repoUrl="https://github.com/yourusername/project-two"
            animationVariants={projectCardVariants}
          />
          <ProjectCard
            title="Project Three"
            description="A TypeScript-based REST API with PostgreSQL to manage dynamic content delivery for web clients."
            technologies={["TypeScript", "Express", "PostgreSQL"]}
            repoUrl="https://github.com/yourusername/project-three"
            animationVariants={projectCardVariants}
          />
        </motion.div>

        <TechMarquee className={styles.TechMarquee} />
      </section>

      <section className={styles.thirdSection}>
        <motion.h3
          className={styles.articlesLabel}
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          ARTICLES
        </motion.h3>
        <SplitText text="Selected articles" className={styles.articlesTitle} />
        <motion.p
          className={styles.articlesSubtitle}
          initial={{ opacity: 0, y: 0, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Here&apos;s a curated selection showcasing my expertise and the
          achieved results.
        </motion.p>

        <motion.div
          className={styles.articleGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={projectContainerVariants}
        >
          <motion.div variants={projectCardVariants}>
            <ArticleCard
              category="TUTORIAL"
              tags="MATH | JAVASCRIPT"
              title="How to map a number between two ranges"
              readTime="5 minute read"
              lastUpdated="October 18, 2023"
              link="#"
            />
          </motion.div>
          <motion.div variants={projectCardVariants}>
            <ArticleCard
              category="GUIDE"
              tags="REACT | TYPESCRIPT"
              title="Building Custom React Hooks"
              readTime="8 minute read"
              lastUpdated="March 15, 2024"
              link="#"
            />
          </motion.div>
          <motion.div variants={projectCardVariants}>
            <ArticleCard
              category="TUTORIAL"
              tags="NODE.JS | EXPRESS"
              title="Creating a REST API with Express"
              readTime="10 minute read"
              lastUpdated="April 1, 2024"
              link="#"
            />
          </motion.div>
          <motion.div variants={projectCardVariants}>
            <ArticleCard
              category="GUIDE"
              tags="REACT | TYPESCRIPT"
              title="Building Custom React Hooks"
              readTime="8 minute read"
              lastUpdated="March 15, 2024"
              link="#"
            />
          </motion.div>
          <motion.div variants={projectCardVariants}>
            <ArticleCard
              category="TUTORIAL"
              tags="NODE.JS | EXPRESS"
              title="Creating a REST API with Express"
              readTime="10 minute read"
              lastUpdated="April 1, 2024"
              link="#"
            />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;