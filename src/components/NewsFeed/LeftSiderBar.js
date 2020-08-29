import React from "react";
import { connect } from "react-redux";

const LeftSiderBar = ({ user }) => {
  return (
    <div className="feed__leftsidebar__upper">
      <div className="user">
        {/* <!-- user info --> */}
        <img src={user.credentials?.userImage} alt="" />
        <div>
          <p className="user__name">{user.credentials?.userName}</p>
        </div>
        <div className="user__point">{user.credentials?.score}</div>
      </div>
      <div className="sidelink">
        <div className="sidelink__icon">
          <i className="fas fa-circle-notch"></i>
        </div>
        <div className="sidelink__name">
          <a href="/#">Dashboard</a>
        </div>
      </div>
      <div className="sidelink">
        <div className="sidelink__icon">
          <i className="fas fa-fire-alt"></i>
        </div>
        <div className="sidelink__name">
          <a href="/#">Trendings</a>
        </div>
      </div>
      {/* <!-- trending items --> */}
      <ul className="trendings">
        <li className="trendings__item">Act of love</li>
        <li className="trendings__item">Good will</li>
        <li className="trendings__item">Leadership</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LeftSiderBar);
