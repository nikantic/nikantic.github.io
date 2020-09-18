import React from "react";
import "./SocialIcon.scss";
import Link from "../Link/Link";
import * as Icon from "react-feather";

const FeatherIcon = (props) => {
  const TagName = Icon[props.iconName];
  return <TagName size={props.size} />;
};

const SocialIcon = (props, isLink) => {
  return (
    props.isLink ?
      <Link customClass="SocialIcon" linkTo={props.socialLink}>
        <FeatherIcon iconName={props.icon} size={props.size} />
      </Link>
      :
      <FeatherIcon iconName={props.icon} size={props.size} />
  )
};

export default SocialIcon;
