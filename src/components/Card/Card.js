import React from "react";

const Card = (props) => {
  const {
    active,
    handleClick,
    ProjectName,
    ProjectContent,
    ProjectLink,
    ProjectTag,
  } = props;

  console.log(active, "<--ActiveCard");
  return (
    <button
      onClick={handleClick}
      className={[`card ${active ? "-activeCard" : ""}`]}
    >
      <h1 className="card__name">{ProjectName}</h1>
      <div className="card__content">
        <p>{ProjectContent}</p>
        <a className="card__link" href={ProjectLink}>
          {ProjectTag}
        </a>
      </div>
    </button>
  );
};

export default Card;
