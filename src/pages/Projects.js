import React from "react";
import ProjectCards from "../components/project_cards/ProjectCards";
import {allProjects} from "../components/project_cards/ProjectCards";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {allProjects.map((project)=>{
            return(
              <ProjectCards title={project.title} img= {project.img} />
            );
          })}
          
        </ul>
      </div>
    </main>
  );
};

export default Projects;
