import React, { Component } from "react";
import ProjectsShowcase from "./ProjectsShowCase.js";
import ProjectsMenu from "./ProjectsMenu.js";

export default class Projects extends Component {
  render() {
    return (
      <>
        <ProjectsShowcase />
        <ProjectsMenu />
      </>
    );
  }
}