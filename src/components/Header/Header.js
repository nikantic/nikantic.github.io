import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderTitleHolder">
        <p className="HeaderTitle HeaderTitle1">Highlights</p>
        <p className="HeaderTitle HeaderTitle2">About me</p>
      </div>
      <div className="HeaderSmallText">
        <div>Nikola Antic \\</div>
        <div>Made in Serbia</div>
      </div>
    </div>
  );
};

export default Header;
