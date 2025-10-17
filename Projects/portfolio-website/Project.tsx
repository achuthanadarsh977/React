import React from "react";
import { projects } from "./data";
import type { Project } from "./types";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="project-card" key={project.id}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech">{project.tech.join(" • ")}</p>
      <div className="links">  
        {project.liveurl && <a href={project.liveurl} target="_blank" rel="noreferrer">Live</a>}
        {project.repourl && <a href={project.repourl} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
};

export default Projects;
