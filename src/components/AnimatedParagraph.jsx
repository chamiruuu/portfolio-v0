import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedParagraph = ({ text, className = "" }) => {
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

  // Split text into array, preserving spaces and line breaks
  const chars = [];
  let key = 0;
  text.split("\n").forEach((line, i, arr) => {
    line.split("").forEach((char) => {
      chars.push({ char, key: key++ });
    });
    if (i < arr.length - 1) chars.push({ char: "\n", key: key++ });
  });

  return (
    <p ref={ref} className={className} style={{ whiteSpace: "pre-line" }}>
      {chars.map(({ char, key }, idx) => {
        if (char === "\n") return <br key={key} />;
        return (
          <motion.span
            key={key}
            initial={{ color: inView ? "#DEDEDE" : "#757575" }}
            animate={{ color: inView ? "#DEDEDE" : "#757575" }}
            transition={{ delay: idx * 0.03, duration: 0.4 }}
            style={{ display: char === " " ? "inline-block" : "inline" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </p>
  );
};

AnimatedParagraph.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AnimatedParagraph;
