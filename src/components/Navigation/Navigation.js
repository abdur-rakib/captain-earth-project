import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { logout } from "../../redux/actions/userAction";

const Navigation = (props) => {
  // const { authenticated, credentials } = props.user;
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      ></input>

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {/* <li className="navigation__item">
            <Link to="/login" className="navigation__link">
              {authenticated ? (
                <span onClick={props.logout}>
                  {credentials.username}(Logout)
                </span>
              ) : (
                <span>Login</span>
              )}
            </Link>
          </li> */}
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              About Captain Earth
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Profile Info
            </a>
          </li>
          <li className="navigation__item">
            <Link to="/leaderboard" className="navigation__link">
              Leader Board
            </Link>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Weekly Evaluation
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
