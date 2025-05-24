import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedTechStack = ({ techs, className = "" }) => {
  const ref = useRef();
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  // Split techs string by ' / ' to get each word
  const words = techs.split(" / ");

  return (
    <div ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {words.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ delay: idx * 0.48, duration: 1.8, ease: "easeOut" }}
          style={{ whiteSpace: "pre" }}
        >
          {word}
          {idx < words.length - 1 && <span style={{ color: "#aaa" }}> / </span>}
        </motion.span>
      ))}
    </div>
  );
};

AnimatedTechStack.propTypes = {
  techs: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AnimatedTechStack;
