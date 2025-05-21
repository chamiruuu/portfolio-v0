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
            <div>I&apos;M CHAMIRURF, A CREATIVE CODER BUILDING BOLD DIGITAL EXPERIENCES.</div>
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
            employmentType="Part Time"
            website="www.dayglarestudios.com"
            description="Worked on various web development projects using modern technologies. Collaborated with senior developers to implement new features and maintain existing codebases. Participated in code reviews and team meetings to ensure high-quality deliverables."
          />
          <WorkExperienceCard 
            company="VidWave Studios"
            companyDescription="A Videogrpahy Company"
            position="Videographer & Editor"
            duration="Oct 2020 - Present · 4 yrs 8 mos"
            location="Colombo, Sri Lanka"
            employmentType="Part Time"
            website="www.vidwavestudios.com"
            description="At VidWave Studios, I specialize in videography and video editing for a variety of events, creating compelling content for weddings, corporate functions, and other occasions. I use industry-standard tools like Davinci Resolve, Adobe Premiere Pro, and After Effects to edit footage and produce polished, high-quality videos that align with client expectations. My role encompasses capturing video, editing raw footage, and delivering the final video products."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;