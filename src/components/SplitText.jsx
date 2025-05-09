import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const SplitText = ({ text, className }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

SplitText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SplitText;