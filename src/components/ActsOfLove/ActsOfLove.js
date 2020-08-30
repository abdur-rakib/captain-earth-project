import React from "react";
import Popup from "./Popup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Mascots_03 from "../../styles/img/mascorts/Mascots-03.png";

const ActsOfLove = ({ user }) => {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <h4 className="card__heading card__heading--1">
            <span className="card__heading-span card__heading-span--1">
              <img src={Mascots_03} alt="category_image" />
              <div className="card__heading__head">
                <h4>ACTS OF LOVE</h4>
              </div>
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>15 Task</li>
              <li>Practice Kindness</li>
              <li>Be a spark of hope</li>
              <li>Enhance emotional well-being</li>

              <h4 className="heading_level u-center-text u-margin-top-small">
                <span className="card__heading_level-span card__heading_level-span--1">
                  Level
                </span>
              </h4>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">15 TASKS</p>
            </div>
            {user.authenticated ? (
              <a href="#popup" className="btn btn--white">
                START NOW
              </a>
            ) : (
              <Link to="/login" className="btn btn--white">
                Login to join
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

export default connect(mapStateToProps)(ActsOfLove);
