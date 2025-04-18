import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WorkExperienceCard from '../components/WorkExperienceCard';
import styles from '../styles/About.module.css';
import abtheroimg from '../assets/abtheroimg.png';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.imageLinksWrapper}>
          <div className={styles.verticalLinksContainer}>
            <a href="#" className={`${styles.verticalLink} ${styles.gallery}`}>GALLERY</a>
            <a href="#" className={`${styles.verticalLink} ${styles.playground}`}>PLAYGROUND</a>
            <a href="#" className={`${styles.verticalLink} ${styles.threedimensional}`}>THREEDIMENSIONAL</a>
          </div>
          <img src={abtheroimg} alt="Hero" className={styles.heroImage} />
        </div>
        <div className={styles.heroText}>
          <div style={{ width: '100%' }}>
            <div>I&apos;M CHAMIRURF - A 20 YEARS OLD</div>
            <div>DEVELOPER</div>
          </div>
        </div>
      </section>

      <section className={styles.secondSection}>
        <h2 className={styles.aboutTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          MYSELF
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        <p className={styles.aboutContent}>
          I&apos;m a student at the Informatics Institute of Technology, where I&apos;m diving deep into the world of technology. Alongside my studies, I work part-time as an Associate Web Developer, where I get to bring ideas to life through code and creativity. My journey into tech began early, sparked by a school workshop on robotics. That initial spark led me to experiment with Arduino projects, explore web design using
        </p>

        <h2 className={styles.techTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          TECHNOLOGIES
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        <p className={styles.techStack}>
          JavaScript / React / Python / C / JAVA
        </p>

        <h2 className={styles.techTitle}>
          <span className={styles.aboutTitleSymbol}>~</span>
          WORK EXPERIENCE
          <span className={styles.aboutTitleSymbol}>~</span>
        </h2>
        
        <div className={styles.workExperienceContainer}>
          <WorkExperienceCard 
            company="V3 Global Holdings"
            companyDescription="Student Employment"
            position="Digital Marketing Executive"
            duration="March 2025 - Present · 1 mos"
            location="Colombo, Sri Lanka"
            employmentType="Part Time"
            website="www.v3global.com"
            description="As an Associate Web Developer at Izatic, I work remotely to develop websites, focusing on transforming provided UI designs into fully functional websites using WordPress. My role includes customizing themes and ensuring websites are optimized for performance and responsiveness. I collaborate with a team to deliver high-quality web solutions tailored to client needs."
          />
          <WorkExperienceCard 
            company="IZATIC"
            companyDescription="Web Developing Company"
            position="Associate Web Developer"
            duration="Dev 2024 - Present · 4 mos"
            location="Remote"
            employmentType="Part Time"
            website="www.izatic.com"
            description="As an Associate Web Developer at Izatic, I work remotely to develop websites, focusing on transforming provided UI designs into fully functional websites using WordPress. My role includes customizing themes and ensuring websites are optimized for performance and responsiveness. I collaborate with a team to deliver high-quality web solutions tailored to client needs."
          />
          <WorkExperienceCard 
            company="St.Sebastians’ College"
            companyDescription="A College in Moratuwa"
            position="Web Developer & Graphic Designer"
            duration="Aug 2024 - Present · 8 mos"
            location="Moratuwa, Sri Lanka"
            employmentType="Part Time"
            website="www.stsebastianscollegemortuwa.com"
            description="Work on web development projects and design graphic content for the college. Collaborate with teams to create engaging, responsive websites and visually appealing graphics for various college events and promotions."
          />
          <WorkExperienceCard 
            company="DayGlare Studios"
            companyDescription="A Photography Company"
            position="Photographer & Designer"
            duration="Dec 2020 - Present · 4 yrs 4 mos"
            location="Colombo, Sri Lanka"
            employmentType="Hybrid"
            website="www.dayglarestudios.com"
            description="Worked on various web development projects using modern technologies. Collaborated with senior developers to implement new features and maintain existing codebases. Participated in code reviews and team meetings to ensure high-quality deliverables."
          />
          <WorkExperienceCard 
            company="Previous Company"
            companyDescription="Technology Solutions Provider"
            position="Junior Developer"
            duration="June 2024 - March 2025 · 9 mos"
            location="Colombo, Sri Lanka"
            employmentType="Full Time"
            website="www.example.com"
            description="Worked on various web development projects using modern technologies. Collaborated with senior developers to implement new features and maintain existing codebases. Participated in code reviews and team meetings to ensure high-quality deliverables."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;