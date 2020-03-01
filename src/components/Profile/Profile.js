import React from "react";
import Image from "../../img/image.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__picture">
        <div className="profile__image">
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="profile__text">
        <h1 className="profile__name">Oscar Gustafsson</h1>
        <h2 className="profile__work">Frontend developer</h2>
        <div className="profile__paragraph">
          “If you want to take the island you need to burn the boats.” <br />
          Hernán Cortés
        </div>
      </div>
      <div className="profile__links">
        <div className="profile__links--type">
          <a
            href="https://www.facebook.com/KungOG"
            rel="noopener noreferrer external"
            target="_blank"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <div className="profile__links--type">
          <a
            href="https://twitter.com/OG91an"
            rel="noopener noreferrer external"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="profile__links--type">
          <a
            href="https://github.com/KungOG"
            rel="noopener noreferrer external"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="profile__links--type">
          <a
            href="https://www.linkedin.com/in/kungog"
            rel="noopener noreferrer external"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
