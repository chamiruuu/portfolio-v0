import { memo } from "react";
import styles from "../styles/ProjectCard.module.css";
import projectImage from "../assets/Rectangle 6.png";
import { MdOutlineReadMore } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectsCard = ({
  title = "Sortlify",
  description = "A simple python script that is with GUI the function of the script is to make sorting files easy.",
  technologies = ["Python", "CustomTinker"],
  repoUrl = "#",
  imageUrl = projectImage,
  animationVariants,
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
        <img src={imageUrl} alt="Project" />
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
            <FaGithub size={24} />
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
            <MdOutlineReadMore size={24} className={styles.arrowIcon} />
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
  imageUrl: PropTypes.string,
  animationVariants: PropTypes.object,
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ProjectsCard);
