import NavBar from "../components/NavBar";
import styles from "../styles/Contact.module.css";
import Footer from "../components/Footer";
import { useRef } from 'react';
import VariableProximity from "../components/VariableProximity";

const Contact = () => {
  const containerRef = useRef(null);
  
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 ref={containerRef} style={{ position: 'relative' }}>
            <VariableProximity
              label="Coffee, Code & Collabs"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </h1>
          <p>Have something in mind? Let&apos;s talk. Whether it&apos;s a small project or a big vision,</p>
          <p>I&apos;m open to freelance opportunities and collaborations.</p>
          <p>Even if you&apos;re just curious about what I do – don&apos;t hesitate to get in touch.</p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
            <span>✦︎</span>
            <a href="mailto:your@email.com">Mail</a>
            <span>✦︎</span>
            <a href="https://instagram.com/yourprofile">Instagram</a>
            <span>✦︎</span>
            <a href="https://github.com/yourprofile">Github</a>
          </div>
        </div>
      </section>
      <Footer className={styles.footer}/>
    </div>
  );
}

export default Contact;