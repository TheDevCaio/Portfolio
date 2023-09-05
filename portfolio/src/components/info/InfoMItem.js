import React, { Component } from "react";
import classNames from "classnames";
import "../styles/infoM.css";

const InfoItemM = ({ T, active, onClick }) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="T">{T}</h2>
    </div>
  );
};

export default InfoItemM;