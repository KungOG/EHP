import React from "react";
import PropTypes from "prop-types";

const ProfilePicture = (props) => {
  const { profilePicture } = props;

  return (
    <div className="profile__picture">
      <div
        className="profile__image"
        style={{ backgroundImage: `${profilePicture}` }}
      />
    </div>
  );
};

ProfilePicture.propTypes = {
  profilePicture: PropTypes.string,
};

export { ProfilePicture };
