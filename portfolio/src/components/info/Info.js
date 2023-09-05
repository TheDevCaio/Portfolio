import React, { Component } from "react";
import Person from "../person/Person.js";
import InfoMenu from "./InfoM.js";

export default class Info extends Component {
  render() {
    return (
      <>
        <Person page="info" />
        <InfoMenu />
      </>
    );
  };
};