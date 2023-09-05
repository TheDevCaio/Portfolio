import React from "react";
import PropTypes from "prop-types";
import personImage from  "../../assets/player.png";
import "../styles/person.css";

const Person = ({ page, activeAbility }) => {
  const personClass = `person ${page} ${activeAbility ? "activeAbility" : ""}`;
  const spanClass = `dark-details-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={personImage} className={personClass} alt="person" />
    </>
  );
};

Person.propTypes = {
  page: PropTypes.string.isRequired,
  activeAbility: PropTypes.bool.isRequired, // Adicione a propriedade "activeAbility"
};

export default Person;