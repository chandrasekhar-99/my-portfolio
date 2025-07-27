import './index.css'

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Projects = ({ title, image, tech, description, demoLink, githubLink, index }) => {
  return(
      <motion.div 
        className="project-card"
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
          <img src={image} alt={title} className="project-image" />
          <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
          <div className="project-tech">
            {tech.map((t, i) => (
              <span key={i} className="tech-badge">{t}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </motion.div>
  )
}

export default Projects