"use client";

import React from "react";
import Image from "next/image";
import { Project } from "./utils/data/project";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-img-wrapper">
        <Image
          src={project.image}
          alt={project.name}
          width={300}
          height={200}
          style={{ borderRadius: "12px", objectFit: "cover" }}
        />
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </a>
  );
};

export default ProjectCard;
