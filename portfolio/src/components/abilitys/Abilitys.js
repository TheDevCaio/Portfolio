import React, { Component } from "react";
import Person from "../person/Person.js";
import AbilitysMenu from "./AbilitysMenu.js";

export default class Abilitys extends Component {
  render() {
    return (
      <>
        <Person page="abilitys" />
        <AbilitysMenu />
      </>
    );
  }
}