import React from "react";
import "./LinkWithIcon.css";

const LinkwithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <a
      href={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title}
      <img src={emoji} alt="" className="link_emoji" />
    </a>
  );
};

export default LinkwithIcon;
