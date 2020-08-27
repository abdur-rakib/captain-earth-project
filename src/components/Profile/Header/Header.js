import React from "react";
import maskot from "../../../styles/img/maskot.png";
import { connect } from "react-redux";

const Header = ({ user: { credentials } }) => {
  const renderProfile = credentials ? (
    <header className="profile">
      <div className="profile__logo-box">
        <img src={maskot} alt="Logo" className="profile__logo" />
      </div>
      <div className="profile__pic-box">
        <img src={credentials.userImage} alt="" className="profile__pic" />
      </div>

      <div className="profile__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--profile">
            {credentials.userName}
          </span>
          <span className="heading-primary--profilesub">
            {credentials.userLevel}
          </span>
        </h1>

        <h2 className="heading-primary--profile">{credentials.score} points</h2>
      </div>
    </header>
  ) : (
    <h1>Loading...</h1>
  );
  return renderProfile;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
