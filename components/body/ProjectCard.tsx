import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a href={project.link} className="project-card" target="_blank" rel="noreferrer">
      <div className="project-card-inner">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
