import React from "react";

const Button = ({ handleClick, isActive }) => {
  return (
    <>
      <button className="modal__button" onClick={handleClick}>
        {!isActive ? <span>Show Projects</span> : <span>Hide Projects</span>}
      </button>
    </>
  );
};

export default Button;
