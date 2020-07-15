import React from "react";
import PropTypes from "prop-types";
//import Image from "../../img/image.jpg";
import LogoType from "../../img/logotype.jpg";

const ProjectCard = (props) => {
  const {
    projectName,
    projectContent,
    projectLink,
    projectTag,
    active,
  } = props;

  const backgroundImage =
    { Image } === true ? `url('${Image}')` : `url('${LogoType}')`;

  return (
    <div
      className={[`projectCard ${active ? "-visibleProject" : ""}`]}
      style={{ backgroundImage: `${backgroundImage}` }}
    >
      <div className="projectCard__wrapper">
        <h1 className="projectCard__name">{projectName}</h1>
        <p className="projectCard__content">{projectContent}</p>
        <a className="projectCard__link" href={projectLink} target="blank_">
          {projectTag}
        </a>
      </div>
      <div className="projectCard__gradient" />
    </div>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectContent: PropTypes.string,
  projectLink: PropTypes.string,
  projectTag: PropTypes.string,
  active: PropTypes.bool,
};

export { ProjectCard };
