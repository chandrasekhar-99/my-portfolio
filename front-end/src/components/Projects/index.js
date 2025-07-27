import { Element } from 'react-scroll'
import projectsData from "../../data/projectsData";
import ProjectCard from "../ProjectsCard";
import "./index.css";

const Projects = () => {
  return (
    <Element name="projects">
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
    </Element>

  );
}

export default Projects;
