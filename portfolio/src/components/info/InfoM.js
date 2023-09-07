import React, { Component } from "react";
import InfoItemM from "./InfoMItem"; 
import subheadingsData from "./InfosubheadingsData";
import InfoSubheading from "./InfoSubheading";
import "../styles/infoM.css"

export default class InfoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SubheadingItem: 1,
      MItem: 1, }; }

  handleMenuItemClick = (mItem) => {
    this.setState({
      MItem: mItem,
      SubheadingItem: 1, }); };

  handleSubheadingClick = (subheading) => {
    this.setState({
      SubheadingItem: subheading, }); };

  render() {
    const {MItem, SubheadingItem } = this.state;
    const mTitle = ["MY PROFILE", "STUDIES", "PROFESSIONAL RESUME"];
    const MTitle = mTitle[MItem - 1];
      

    const subheadings = subheadingsData[MItem];

    return (
      <>
        <div className="infoM">
          {mTitle.map((item, index) => (
            <InfoItemM
              T={item}
              key={index}
              active={MItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            /> ))} </div>

        <div className="InfoBackground">
        <div className="mInfo">
        
            <h3 className="MTitle">{MTitle}</h3>
            
          {subheadings.map((subheading, index) => (
            <InfoSubheading
              key={index}
              T={subheading.T}
              content={subheading.content}
              active={SubheadingItem === index + 1}
              onClick={() => this.handleSubheadingClick(index + 1)}
              mItem={MItem}
            />
          ))} </div> </div>
      </>
    );
  }
}