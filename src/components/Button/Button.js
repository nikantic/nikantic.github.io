import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div className={"Button " + (props.customClass ? props.customClass : "")}>
      <a href={props.linkTo} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
    </div>
  );
};

export default Button;
