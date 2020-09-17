import React from "react";
import "./Link.scss";

const Link = (props) => {
  return (
    <div className={"Link " + props.customClass}>
      <a href={props.linkTo} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </div>
  );
};

export default Link;
