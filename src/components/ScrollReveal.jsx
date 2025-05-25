import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types'; // Import PropTypes

// Import the CSS module
import styles from '../styles/ScrollReveal.module.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom"
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    // Split text by words and spaces, then map to span elements
    return text.split(/(\s+)/).map((word, index) => {
      // If it's a space, return it as is
      if (word.match(/^\s+$/)) return word;
      // Otherwise, wrap the word in a span with the module class
      return (
        <span className={styles.word} key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Determine the scroller element, either the provided ref or the window
    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Store references to the created ScrollTrigger instances
    const scrollTriggers = [];

    // Animation for the main container's rotation
    const rotationAnimation = gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true, // Smoothly animate on scroll
        },
      }
    );
    scrollTriggers.push(rotationAnimation.scrollTrigger);

    // Select all word elements within the container
    const wordElements = el.querySelectorAll(`.${styles.word}`);

    // Animation for words' opacity
    const opacityAnimation = gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'in-out',
        opacity: 1,
        stagger: 0.05, // Stagger the animation for each word
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );
    scrollTriggers.push(opacityAnimation.scrollTrigger);

    // Conditional animation for blur effect
    if (enableBlur) {
      const blurAnimation = gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
      scrollTriggers.push(blurAnimation.scrollTrigger);
    }

    // Cleanup function for only this component's ScrollTrigger instances
    return () => {
      scrollTriggers.forEach(trigger => {
        if (trigger) trigger.kill();
      });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    // Apply module classes and any additional class names
    <h2 ref={containerRef} className={`${styles.scrollReveal} ${containerClassName}`}>
      <p className={`${styles.scrollRevealText} ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

// Define propTypes for validation
ScrollReveal.propTypes = {
  children: PropTypes.node, // Can be any renderable React node
  scrollContainerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  enableBlur: PropTypes.bool,
  baseOpacity: PropTypes.number,
  baseRotation: PropTypes.number,
  blurStrength: PropTypes.number,
  containerClassName: PropTypes.string,
  textClassName: PropTypes.string,
  rotationEnd: PropTypes.string,
  wordAnimationEnd: PropTypes.string,
};

export default ScrollReveal;
