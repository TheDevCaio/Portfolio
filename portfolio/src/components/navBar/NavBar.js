import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../../assets/astronaut-helmet.png";
import deadEye from "../../assets/dead-eye.png";
import stack from "../../assets/stack.png";
import envelope from "../../assets/envelope.png";
import "../styles/navBar.css";

export default function Nav() {
  const position = useLocation();

  const getNav = () => {
    switch (position.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    };
  };

  const getTitle = () => {
    switch (position.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    };
  };

  const navPosition = getNav();
  const pageTitle = getTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPosition;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPosition}`}>
      {renderNavLink(
        "/",
        astronautHelmet,
        "astronaut helmet icon",
        "nav-about"
      )}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
}