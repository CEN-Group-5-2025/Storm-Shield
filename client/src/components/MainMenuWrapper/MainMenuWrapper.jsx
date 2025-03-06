import React from "react";
import { MainMenu } from "../MainMenu";
import "./style.css";

export const MainMenuWrapper = ({ className }) => {
  return (
    <div className={`main-menu-wrapper ${className}`}>
      <MainMenu className="main-menu-instance" text="Volunteer Matching" />
    </div>
  );
};
