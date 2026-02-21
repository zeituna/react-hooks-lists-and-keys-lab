import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

function App() {

  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      about: "A personal portfolio website.",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      id: 2,
      name: "Blog App",
      about: "A simple blogging platform.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      name: "E-commerce App",
      about: "An online shopping platform.",
      technologies: ["React", "Redux", "Firebase"]
    }
  ];

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;