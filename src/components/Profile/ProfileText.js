import React from "react";
//mport PropTypes from "prop-types";

const ProfileText = () => {
  return (
    <div className="profile__text">
      <h1 className="profile__name">Oscar Gustafsson</h1>
      <h2 className="profile__work">Frontend developer</h2>
      <div className="profile__paragraph">
        “If you want to take the island you need to burn the boats.” <br />
        Hernán Cortés
      </div>
    </div>
  );
};

//ProfileText.propTypes = {};

export { ProfileText };
