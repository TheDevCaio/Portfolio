import React, { Component } from "react";
import classNames from "classnames";
import "../styles/abilityM.css";
import abilitys from "./AbilitysData.js";

export default class AbilityMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMItem: 1,
    };
  }

  handleMItemClick = (mItem) => {
    this.setState({
      activeMItem: mItem,
    });
  };

  renderContent = (abilitys) => {
    return abilitys.map((abilitys, index) => (
      <div
        key={index}
        className={`ability-sub-container-${this.state.activeMItem}`}>
        <h3>{abilitys.name}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < abilitys.level ? "filled" : "unfilled" }`}/>
          ))}
        </div>
      </div>
    ));
  };

    render() {
    const { activeMItem } = this.state;
    const menuItems = ["FRONT-END", "BACK-END"];
    return (
      <div className="ability-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("ability-item", {
              activeAbility: activeMItem === index + 1, })}
            onClick={() => this.handleMItemClick(index + 1)}>
            <h2 className="ability-title">{item}</h2>
          </div>))}
        
        <div className="ability-sub-container">
          {this.renderContent(abilitys[activeMItem])}
        </div>
      </div>
    ); 
  }}