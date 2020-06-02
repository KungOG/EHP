import React from "react";

const Button = ({ handleClick, isActive }) => {
  return (
    <>
      <button
        className={[`modal__button ${isActive ? "-active" : "-inactive"}`]}
        onClick={handleClick}
      >
        {!isActive ? (
          <span data-back="Show Projects" data-front="My Projects"></span>
        ) : (
          <span>Hide Projects</span>
        )}
      </button>
    </>
  );
};

export { Button };
