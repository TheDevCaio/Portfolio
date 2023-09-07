import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../../assets/user.png";
import infos from "../../assets/infos.png";
import projects from "../../assets/projects.png";
import contact from "../../assets/envelope.png";
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
      case "/skills/contact":
      return "nav-contact";
      case "/projects/contact":
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
    <nav id = "user" className={`nav ${navPosition}`}>
      {renderNavLink(
        "/",
        user,
        "user",
        "nav-about"
      )}
      {renderNavLink("/skills", infos, "infos", "nav-skills")}
      {renderNavLink("/projects", projects, "projects", "nav-projects")}
      {renderNavLink("contact", contact, "contact", "nav-contact")}
    </nav>
  );
}