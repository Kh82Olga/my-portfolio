import React from "react";
import { NavLink } from "react-router-dom";
import "./projectCardStyle.css";

const ProjectCards = ({ title, img, index }) => {
  return (
    <NavLink to={`/projectDetail/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default ProjectCards;
