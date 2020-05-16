import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Profile from "../Profile/Profile";
import Button from "../Button/Button";
//import Image from "../../img/image.jpg";
import LogoType from "../../img/logotype.jpg";

const Modal = () => {
  const [active, setActive] = useState(false);

  const showProjects = () => {
    if (active === true) setActive(false);
    if (active === false) setActive(true);
  };

  const backgroundImage =
    { Image } === true ? `url('${Image}')` : `url('${LogoType}')`;

  return (
    <div className="modal">
      <div className="modal__top">
        <Profile ProfilePicture={backgroundImage} />
      </div>
      <div className="modal__bottom">
        <Button handleClick={showProjects} isActive={active} />
        <ProjectCard isActive={active} />
      </div>
    </div>
  );
};

export default Modal;
