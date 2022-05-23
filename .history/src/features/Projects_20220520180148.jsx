import React from "react";
import PropTypes from "prop-types";

import "../css/Projects.css";

Projects.propTypes = {};

const projects = [
    {
        id: 1,
        img: './1png'
    },
    {
        id: 2,
        img: './2png'
    },
    {
        id: 3,
        img: './3png'
    },
    {
        id: 4,
        img: './4png'
    }
]


function Projects(props) {
  return (
    <div className="projects">
      <u>Projects</u>
      <div className="project-list">
      {projects.map(project,index) => {
        <div  key = {index}>
          <img src={project.img}></img>
        </div>
      })}
        {/* <div className="project-list__one">
          <img src="./1.png"></img>
        </div>
        <div className="project-list__two">
          <img src="./2.png"></img>
        </div>
        <div className="project-list__three">
          <img src="./3.png"></img>
        </div>
        <div className="project-list__four">
          <img src="./4.png"></img>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
