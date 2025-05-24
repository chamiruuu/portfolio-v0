import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkExperienceCard from "../components/WorkExperienceCard";
import styles from "../styles/About.module.css";
import abtheroimg from "../assets/abtheroimg.avif";
import Timeline from "../components/EducationalTimeline";
import LetterSplit from "../components/LetterSplit";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedParagraph from "../components/AnimatedParagraph";
import AnimatedTechStack from "../components/AnimatedTechStack";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const About = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <div className={styles.aboutContainer}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.imageLinksWrapper}>
          <div className={styles.verticalLinksContainer}>
            <a href="#" className={`${styles.verticalLink} ${styles.gallery}`}>
              GALLERY
            </a>
            <a
              href="#"
              className={`${styles.verticalLink} ${styles.playground}`}
            >
              PLAYGROUND
            </a>
            <a
              href="#"
              className={`${styles.verticalLink} ${styles.threedimensional}`}
            >
              THREEDIMENSIONAL
            </a>
          </div>
          <img
            src={abtheroimg}
            loading="lazy"
            alt="Hero"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroText}>
          <div style={{ width: "100%" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0rem" }}
            >
              <LetterSplit
                text="I'M CHAMIRURF, A CREATIVE CODER"
                delay={80}
                animateBy="letters"
                direction="down"
                onAnimationComplete={() => setShowSecondLine(true)}
              />
              {showSecondLine && (
                <LetterSplit
                  text="BUILDING BOLD DIGITAL EXPERIENCES."
                  delay={50}
                  animateBy="letters"
                  direction="down"
                  onAnimationComplete={handleAnimationComplete}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.secondSection}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className={styles.aboutTitleSymbol}>~</span>
          MYSELF
          <span className={styles.aboutTitleSymbol}>~</span>
        </motion.h2>
        <AnimatedParagraph
          className={styles.aboutContent}
          text={`I'm currently pursuing a Bachelor of Science degree in Computer Science, awarded by the University of Westminster (UK) through the Informatics Institute of Technology (IIT) in Sri Lanka, where I'm deeply engaged in exploring the ever-evolving world of software and digital innovation. Alongside my academic journey, I work part-time as an Associate Web Developer at Izatic, where I collaborate with a team to build functional and visually compelling web solutions that solve real-world problems. Outside the world of code, I'm also a passionate photographer — capturing moments, moods, and stories through my lens. Whether I'm refining a front-end interface or framing a perfect shot, I'm driven by a love for creativity, precision, and meaningful expression in both digital and visual mediums. My work reflects a balance between technical curiosity and artistic intuition, and I'm always eager to keep learning, building, and pushing the boundaries of what I can create.`}
        />

        <motion.h2
          className={styles.techTitle}
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className={styles.aboutTitleSymbol}>~</span>
          TECHNOLOGIES
          <span className={styles.aboutTitleSymbol}>~</span>
        </motion.h2>
        <AnimatedTechStack
          className={styles.techStack}
          techs="Python / Javascript / React / Wordpress / Framer"
        />

        <motion.h2
          className={styles.techTitle}
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className={styles.aboutTitleSymbol}>~</span>
          WORK EXPERIENCE
          <span className={styles.aboutTitleSymbol}>~</span>
        </motion.h2>

        <div className={styles.workExperienceContainer}>
          <WorkExperienceCard
            company="IZATIC"
            companyDescription="Web Developing Company"
            position="Associate Web Developer"
            duration="Dec 2024 - Present · 6 mos"
            location="Remote"
            employmentType="Part Time"
            website="www.izatic.com"
            description="As an Associate Web Developer at Izatic, I work remotely to develop websites, focusing on transforming provided UI designs into fully functional websites using WordPress. My role includes customizing themes and ensuring websites are optimized for performance and responsiveness. I collaborate with a team to deliver high-quality web solutions tailored to client needs."
          />
          <WorkExperienceCard
            company="St.Sebastians’ College"
            companyDescription="A College in Moratuwa"
            position="Web Developer & Graphic Designer"
            duration="Jul 2024 - Present · 11 mos"
            location="Moratuwa, Sri Lanka"
            employmentType="Part Time"
            website="www.stsebastianscollegemortuwa.com"
            description="I manage and continuously update the college’s website, ensuring it remains fresh, functional, and user-friendly. Alongside web development, I also create graphic designs for various college events and promotions, blending creativity with technical skills to deliver engaging visuals that capture attention and support the college’s communication goals."
          />
          <WorkExperienceCard
            company="DayGlare Studios"
            companyDescription="A Photography Company"
            position="Photographer & Designer"
            duration="Dec 2020 - Present · 4 yrs 6 mos"
            location="Colombo, Sri Lanka"
            employmentType="Part Time"
            website="www.dayglarestudios.com"
            description="At DayGlare Studios, I focus on photography and graphic design, capturing high-quality images for events and creating compelling visuals. I manage photo shoots, edit images, and design content using Adobe Photoshop and Illustrator. I collaborate with clients to bring their creative visions to life through both photography and design."
          />
          <WorkExperienceCard
            company="VidWave Studios"
            companyDescription="A Videogrpahy Company"
            position="Videographer & Editor"
            duration="Oct 2020 - Present · 4 yrs 8 mos"
            location="Colombo, Sri Lanka"
            employmentType="Part Time"
            website="www.vidwavestudios.com"
            description="At VidWave Studios, I specialize in videography and editing for events such as weddings and corporate functions. Using tools like Davinci Resolve, Premiere Pro, and After Effects, I capture footage, edit raw video, and deliver polished, high-quality final products that meet client expectations and tell their stories effectively."
          />
        </div>

        <h2 className={styles.techTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          EDUCATION
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        <Timeline />
      </section>
      <Footer />
    </div>
  );
};

export default About;