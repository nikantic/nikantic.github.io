import React from "react";
import "./ProfileCard.scss";
import SocialIcon from "../SocialIcon/SocialIcon";
import Button from "../Button/Button";

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
            icon="GitHub"
            size="18"
            socialLink="https://avatars1.com"
          />
          <SocialIcon
            icon="Instagram"
            size="18"
            socialLink="https://avatars1.com"
          />
          <SocialIcon
            icon="Codepen"
            size="18"
            socialLink="https://avatars1.com"
          />
          <SocialIcon
            icon="Codesandbox"
            size="18"
            socialLink="https://avatars1.com"
          />
          <SocialIcon
            icon="Linkedin"
            size="18"
            socialLink="https://avatars1.com"
          />
        </div>
        <div className="ProfileInfoTopHolder">
          <p>Frontend Developer - Javascript / React</p>
          <p className="ProfileInfoLocation">Belgrade, Serbia</p>
        </div>
        <div className="ProfileInfoDescription">
          <p>
            I'm currently a Creative Frontend Developer at Qode Interactive. I
            love working with talented designers and developers to deliver cool
            and innovative experiences on the web.
          </p>
        </div>
      </div>
      <div className="ButtonsHolder">
        <Button linkTo="https://avatars1.com" text="Message" />
        <Button linkTo="https://avatars1.com" text="Download CV" />
      </div>
    </div>
  );
};

export default ProfileCard;
