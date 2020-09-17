import React from "react";
import "./ProjectCard.scss";
import SocialIcon from "../SocialIcon/SocialIcon";

const ProjectCard = (props) => {
  return (
    <div className="ProjectCard">
      <a
        className="ProjectCardTitle"
        href={props.linkTo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon="Book" size="15" />
        {props.title}
      </a>
      <div className="ProjectCardDescription">{props.description}</div>
      <div className="ProjectCardTech">
        {props.tech.map((item) => {
          return <span>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
