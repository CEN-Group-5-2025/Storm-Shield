import React from "react";
import "./style.css";

export const MainMenu = ({ className, text = "Volunteer" }) => {
  return (
    <div className={`main-menu ${className}`}>
      <div className="frame">
        <div className="text-wrapper">Dashboard</div>

        <div className="text-wrapper">Shelter Locator</div>

        <div className="div">Community</div>

        <div className="volunteer">{text}</div>
      </div>

      <div className="text-wrapper-2">StormShield</div>

      <div className="gg-profile">
        <img
          className="group"
          alt="Group"
          src="https://c.animaapp.com/gQA6tID1/img/group-2@2x.png"
        />
      </div>
    </div>
  );
};
