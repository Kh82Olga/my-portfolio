import React from "react";
import { useParams } from "react-router-dom";
import gitHubIcon from "./../img/icons/gitHub-black.svg";
import { allProjects } from "./../components/project_cards/projectsList";
import img from "./../img/projects/01-big.jpg";

const ProjectDetail = ({ title }) => {
  const { id } = useParams();
  const projectDetail = allProjects[id];
  return (
    <div className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projectDetail.title}</h1>

          <img
            src={projectDetail.imgBig}
            alt={projectDetail.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {projectDetail.skills}</p>
          </div>

          {projectDetail.gitHubLink && (
            <a
              href={projectDetail.gitHubLink}
              target="_blank"
              className="btn-outline"
            >
              <img src={gitHubIcon} alt="" />
              GitHub repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
