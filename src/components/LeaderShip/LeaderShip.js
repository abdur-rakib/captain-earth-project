import React from "react";
import Popup from "./Popup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const LeaderShip = ({ user }) => {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--3">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--3">
              LEADERSHIP
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>15 Tasks</li>
              <li>Maximize efficiency</li>
              <li>Achive organisational goals</li>
              <li>Build alliances via networking</li>
              <li>
                Difficulty: <b>HARD</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">15 TASKS!</p>
            </div>
            {user.authenticated ? (
              <a href="#popup2" className="btn btn--white">
                START NOW!
              </a>
            ) : (
              <Link to="/login" className="btn btn--white">
                Login to join!
              </Link>
            )}
          </div>
        </div>
      </div>
      <Popup />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LeaderShip);
