import { useRef, useState } from "react";
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
  const [loadingDone, setLoadingDone] = useState(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    return !!hasVisited; // Convert to boolean
  });

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

  if (!loadingDone) return <Loader onFinish={() => {
    localStorage.setItem('hasVisitedBefore', 'true');
    setLoadingDone(true);
  }} />;

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
            I&apos;m a passionate developer who loves exploring how ideas turn
            into real, working things through code. I’m currently pursuing a BSc
            (Hons) in Computer Science, which continues to deepen my
            understanding of the field and fuel my curiosity. I enjoy learning
            new technologies, experimenting with different tools, and growing
            through every project I take on.
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
            description="A sleek, Python-powered desktop app built with CustomTkinter that helps you quickly sort, copy, or move files based on filenames and extensions. Features include clipboard pasting, extension filtering, real-time progress tracking, undo functionality, and a modern dark-themed UI designed for a smooth, efficient workflow."
            technologies={["Python", "CustomTinker"]}
            repoUrl="https://github.com/yourusername/sortlify"
            animationVariants={projectCardVariants}
          />
          <ProjectCard
            title="NumScan OCR"
            description="A Python script that extracts specific number patterns from images using Tesseract OCR. It processes batches of images, detects duplicates, and organizes problematic and duplicate images into separate folders. Includes advanced image processing for improved accuracy and provides detailed summary statistics for easy tracking."
            technologies={["Python", "Pytesseract", "PIL"]}
            repoUrl="https://github.com/yourusername/project-two"
            animationVariants={projectCardVariants}
          />
          <ProjectCard
            title="CanvasFlow"
            description="A Photoshop script that automates image replacement by importing images from a folder and swapping them into a placeholder layer. It resizes, centers, and converts images to Smart Objects, tracking progress to let you pick up seamlessly. Perfect for streamlining creative workflows and batch updates."
            technologies={["ExtendScript", "JavaScript"]}
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
