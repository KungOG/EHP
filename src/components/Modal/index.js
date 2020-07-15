import React, { useState, useEffect } from "react";
import { Projects } from "../Projects";
import { ProfilePicture } from "../Profile/ProfilePicture";
import { ProfileText } from "../Profile/ProfileText";
import { ProfileSocials } from "../Profile/ProfileSocials";
import { Button } from "../Button";
import Image from "../../img/image.jpg";
import LogoType from "../../img/logotype.jpg";

const Modal = () => {
  const [active, setActive] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

  const showProjects = () => {
    setActive(!active);
    setFlipCard(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipCard(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [flipCard]);

  const backgroundImage =
    Image === true ? `url('${Image}')` : `url('${LogoType}')`;

  return (
    <div className="modal">
      <div className={[`modal__top${flipCard ? " undock" : ""}`]}>
        <div className={[`profile${active ? " -hide" : ""}`]}>
          <ProfilePicture profilePicture={backgroundImage} />
          <ProfileText />
        </div>
        <Projects isActive={active} />
      </div>
      <div className="modal__bottom">
        <ProfileSocials />
        <Button handleClick={showProjects} isActive={active} />
      </div>
    </div>
  );
};

export { Modal };
