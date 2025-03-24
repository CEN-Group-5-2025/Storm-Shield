import React from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { ProfileIcon } from "./ProfileIcon";
import "./navigation-bar.css";

export const NavigationBar = () => {
  return (
    <header className="navigation-bar">
      <Logo />
      <NavLinks />
      <ProfileIcon />
    </header>
  );
}; 