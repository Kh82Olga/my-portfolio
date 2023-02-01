import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import gitHubIcon from "./../img/icons/gitHub-black.svg";
import webLogo from "./../img/icons/weblogo.svg"
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
          {projectDetail.webLink ? (
            <a href={projectDetail.webLink} target="_blank">
              <img
                src={projectDetail.imgBig}
                alt={projectDetail.title}
                className="project-details__cover"
              />
            </a>
          ) : (
            <img
              src={projectDetail.imgBig}
              alt={projectDetail.title}
              className="project-details__cover"
            />
          )}

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
              GitHub Repo
            </a>
          )}
          <br></br>
          {projectDetail.webLink && (
            <a
              href={projectDetail.webLink}
              target="_blank"
              className="btn-outline"
            >
              <img src={webLogo} alt="" />
              App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
