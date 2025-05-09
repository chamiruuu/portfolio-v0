import styles from "../styles/ProjectCard.module.css";
import projectImage from "../assets/Rectangle 6.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectsCard = ({
  title = "Sortlify",
  description = "A simple python script that is with GUI the function of the script is to make sorting files easy.",
  technologies = ["Python", "CustomTinker"],
  repoUrl = "#",
  animationVariants, // <- NEW PROP
}) => {
  return (
    <motion.div
      className={styles.container}
      variants={
        animationVariants || {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }
      }
    >
      <div className={styles.imagePlaceholder}>
        <img src={projectImage} alt="Project" />
      </div>
      <div className={styles.texts}>
        <div className={styles.titleWrapper}>
          <h1>{title}</h1>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <GitHubIcon />
          </a>
        </div>
        <p>{description}</p>
        <div className={styles.tagsWrapper}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tag}>
              {tech}
            </span>
          ))}
          <button className={styles.readMore}>
            <b>Read More</b>
            <ReadMoreRoundedIcon className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ProjectsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  repoUrl: PropTypes.string,
  animationVariants: PropTypes.object, // <- NEW PROP VALIDATION
};

export default ProjectsCard;