import React from 'react';
import "./projectCardStyle.css";
import project1 from "./../../img/projects/01.jpg";

const ProjectCards = ({title, img}) => {
  return (
    <li className="project">
            <a href="./project-page.html">
              <img src={project1} alt="Project img" className="project__img" />
              <h3 className="project__title">Project 1</h3>
            </a>
          </li>
  )
}

export default ProjectCards