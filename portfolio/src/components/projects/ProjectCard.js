import React from "react";
import "../styles/project.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.imageSrc} alt={project.title} />
      </a>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <bk>
      </bk>
      <p>{project.tecnologies}</p>
    </div>
  );
};

export default ProjectCard;