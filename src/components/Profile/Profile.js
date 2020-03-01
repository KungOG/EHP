import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__picture">
        <div className="profile__image"></div>
      </div>
      <div className="profile__text">
        <h1 className="profile__name">Namn Namnsson</h1>
        <h2 className="profile__work">Yrke Yrke Yrke</h2>
        <div className="profile__paragraph">
          "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadhe
          yadhelr hadjaeu eyadehehe yuehas"
        </div>
      </div>
      <div className="profile__links">
        <div className="profile__links--type"></div>
        <div className="profile__links--type"></div>
        <div className="profile__links--type"></div>
        <div className="profile__links--type"></div>
      </div>
    </div>
  );
};

export default Profile;
