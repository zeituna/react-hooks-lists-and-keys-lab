import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectComponents = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectComponents}
    </section>
  );
}

export default ProjectList;