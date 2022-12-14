import React from "react";
import project1 from "./../img/projects/01.jpg";
import project2 from "./../img/projects/02.jpg";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <li className="project">
            <a href="./project-page.html">
              <img
                src={project1}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Project 1</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img
                src={project2}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Project 2</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
