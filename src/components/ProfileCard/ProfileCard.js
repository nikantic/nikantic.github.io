import React from "react";
import "./ProfileCard.scss";
import SocialIcon from "../SocialIcon/SocialIcon";
import Button from "../Button/Button";
import portfolio from "../../portfolio.json";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImageHolder">
        <img
          alt="profile"
          src="https://avatars1.githubusercontent.com/u/28504633?s=460&u=e975d130ab966a4646e43c646628af5ab04143d4&v=4"
        />
      </div>
      <div>
        <h1>Nikola Antic</h1>
        <div className="SocialIconsHolder">
          <SocialIcon
            isLink
            icon="Linkedin"
            size="18"
            socialLink="https://www.linkedin.com/in/nikantic"
          />
          <SocialIcon
            isLink
            icon="GitHub"
            size="18"
            socialLink="https://github.com/nikantic"
          />
        </div>
        <div className="ProfileInfoTopHolder">
          <p>Frontend Developer - JavaScript / React</p>
          <p className="ProfileInfoLocation">Belgrade, Serbia</p>
        </div>
        <div className="ProfileInfoDescription">
          <p>{portfolio.about}</p>
        </div>
      </div>
      <div className="ButtonsHolder">
        <Button linkTo="mailto:nikantic@outlook.com" text="Message" />
      </div>
    </div>
  );
};

export default ProfileCard;
