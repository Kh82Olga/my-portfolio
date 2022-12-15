import React from 'react'
import img from "./../img/projects/01-big.jpg"
import gitHubIcon from "./../img/icons/gitHub-black.svg"


const ProjectDetail = ({title}) => {
  return (
    <div className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">project</h1>

            <img src={img} alt="" className="project-details__cover"/>

            <div className="project-details__desc">
                <p>Skills: React, Node.js, MongoDB</p>
            </div>

            <a href=" " target="_blank" className="btn-outline">
                <img src={gitHubIcon} alt=""/>
                GitHub repo
            </a>

        </div>
    </div>
</div>
  )
}

export default ProjectDetail