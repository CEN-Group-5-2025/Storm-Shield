import React from "react";
import "./nav-links.css";

export const NavLinks = () => {
  const navItems = [
    "Dashboard",
    "Shelter Locator",
    "Community",
    "Volunteer Matching",
  ];

  return (
    <nav className="nav-links">
      {navItems.map((item) => (
        <button
          key={item}
          className="nav-link"
          aria-label={item}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}; 