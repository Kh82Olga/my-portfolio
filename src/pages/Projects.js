import React from "react";
import ProjectCards from "../components/project_cards/ProjectCards";
import {allProjects} from "../components/project_cards/projectsList.js";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {allProjects.map((project, index)=>{
            return(
              <ProjectCards key={index} title={project.title} img= {project.img} index = {index}/>
            );
          })}
          
        </ul>
      </div>
    </main>
  );
};

export default Projects;
