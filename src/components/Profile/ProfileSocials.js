import React from "react";
//import PropTypes from "prop-types";

const ProfileSocials = () => {
  return (
    <div className="profile__links">
      <a
        className="profile__links--type"
        href="https://www.facebook.com/KungOG"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-facebook"></i>
      </a>
      <a
        className="profile__links--type"
        href="https://twitter.com/OG91an"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-twitter"></i>
      </a>
      <a
        className="profile__links--type"
        href="https://github.com/KungOG"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-github"></i>
      </a>
      <a
        className="profile__links--type"
        href="https://www.linkedin.com/in/kungog"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-linkedin"></i>
      </a>
    </div>
  );
};

//ProfileSocials.propTypes = {};

export { ProfileSocials };
