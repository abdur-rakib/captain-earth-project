import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/userAction";

const Navigation = (props) => {
  const { authenticated, credentials } = props.user;
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
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/newsfeed" className="navigation__link">
              Tasks Feed
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Your benefits
            </Link>
          </li>
          <li className="navigation__item">
            {authenticated ? (
              <Link
                className="navigation__link"
                to={`/user/${credentials?.ref}`}
              >
                Profile Info
              </Link>
            ) : (
              <Link className="navigation__link" to="/login">
                Profile Info
              </Link>
            )}
          </li>
          <li className="navigation__item">
            <Link to="/leaderboard" className="navigation__link">
              Leader Board
            </Link>
          </li>

          <li className="navigation__item">
            <Link
              to="/login"
              className="navigation__link"
              style={{ padding: "auto 10px" }}
            >
              {authenticated && credentials ? (
                <span onClick={props.logout}>
                  {credentials.userName}(Logout)
                </span>
              ) : (
                <span>Login</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapActionsToProps = { logout };

export default connect(mapStateToProps, mapActionsToProps)(Navigation);
