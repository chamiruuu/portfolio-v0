import { useEffect, useRef } from "react";
import styles from "../styles/BentoCard.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BentoCard = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reset any previously added references
    cardsRef.current = [];
    
    // Get all card elements
    const cardElements = gridRef.current.querySelectorAll(`.${styles.item}`);
    
    // Set initial state - invisible (only opacity, no movement)
    gsap.set(cardElements, { 
      autoAlpha: 0,
    });

    // Create a random order for animation
    const indices = Array.from({ length: cardElements.length }, (_, i) => i);
    
    // Fisher-Yates shuffle algorithm for random order
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start when the top of the section hits 80% down the viewport
        once: true, // Only trigger once
        // markers: true, // For debugging, remove in production
      }
    });

    // Add animations to the timeline - just fade in, no vertical movement
    indices.forEach((index, i) => {
      tl.to(cardElements[index], {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.out", // Smoother easing
      }, i * 0.15); // Slightly faster staggering for better performance
    });

    // Clean up animation on unmount
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.sectiongrid} aria-label="Featured Projects Grid">
      <div className={styles.container}>
        <div ref={gridRef} className={styles.grid} role="list">
          <div 
            className={`${styles.item} ${styles["item-1"]}`} 
            ref={el => cardsRef.current[0] = el}
            tabIndex="0"
            role="article"
            aria-labelledby="project-title-1"
          >
            <div>
              <h2 id="project-title-1" className={styles["project-title"]}>SortLify</h2>
              <p className={styles["project-tech"]}>Python / CustomTinker</p>
            </div>
            <div className={styles["project-number"]} aria-hidden="true">01</div>
            <div className={styles["project-date"]} aria-label="December 2024">- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]} aria-label="Learn more about SortLify project">
              <RiArrowRightUpLine />
            </a>
          </div>
          <div 
            className={`${styles.item} ${styles["item-2"]}`} 
            ref={el => cardsRef.current[1] = el}
            tabIndex="0"
            role="article"
            aria-labelledby="project-title-2"
          >
            <div>
              <h2 id="project-title-2" className={styles["project-title"]}>Invoice Generator</h2>
              <p className={styles["project-tech"]}>React / JavaScript</p>
            </div>
            <div className={styles["project-number"]} aria-hidden="true">02</div>
            <div className={styles["project-date"]} aria-label="December 2024">- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]} aria-label="Learn more about Invoice Generator project">
              <RiArrowRightUpLine />
            </a>
          </div>
          <div 
            className={`${styles.item} ${styles["item-3"]}`} 
            ref={el => cardsRef.current[2] = el}
            tabIndex="0"
            role="article"
            aria-labelledby="project-title-3"
          >
            <div>
              <h2 id="project-title-3" className={styles["project-title"]}>8pointeight Studios</h2>
              <p className={styles["project-tech"]}>React / JavaScript</p>
            </div>
            <div className={styles["project-number"]} aria-hidden="true">03</div>
            <div className={styles["project-date"]} aria-label="December 2024">- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]} aria-label="Learn more about 8pointeight Studios project">
              <RiArrowRightUpLine />
            </a>
          </div>
          <div 
            className={`${styles.item} ${styles["item-4"]}`} 
            ref={el => cardsRef.current[3] = el}
            tabIndex="0"
            role="article"
            aria-labelledby="project-title-4"
          >
            <div>
              <h2 id="project-title-4" className={styles["project-title"]}>YatiyanaCinnamon</h2>
              <p className={styles["project-tech"]}>Wordpress / Elementor</p>
            </div>
            <div className={styles["project-number"]} aria-hidden="true">04</div>
            <div className={styles["project-date"]} aria-label="December 2024">- 2024 DEC</div>
            <a href="#" className={styles["arrow-link"]} aria-label="Learn more about YatiyanaCinnamon project">
              <RiArrowRightUpLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoCard;
