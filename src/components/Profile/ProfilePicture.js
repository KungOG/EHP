import React from "react";
import PropTypes from "prop-types";

const ProfilePicture = (props) => {
  const { ProfilePicture } = props;

  return (
    <div className="profile__picture">
      <div
        className="profile__image"
        style={{ backgroundImage: `${ProfilePicture}` }}
      />
    </div>
  );
};

ProfilePicture.propTypes = {
  ProfilePicture: PropTypes.string,
};

export { ProfilePicture };
