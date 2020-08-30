import React from "react";
import Popup from "./Popup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Mascots_02 from "../../styles/img/mascorts/Mascots-02.png";

const GoodWill = ({ user }) => {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <h4 className="card__heading card__heading--2">
            <span className="card__heading-span card__heading-span--2">
              <img src={Mascots_02} alt="category_image" />
              <div className="card__heading__head">
                <h4>Good Will</h4>
              </div>
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>15 Tasks</li>
              <li>Become happier</li>
              <li>Elevate self-esteem</li>
              <li>Fewer negative emotions</li>
              <h4 className="heading_level u-center-text u-margin-top-small">
                <span className="card__heading_level-span card__heading_level-span--2">
                  Level
                </span>
              </h4>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-2">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">15 TASKS</p>
            </div>
            {user.authenticated ? (
              <a href="#popup1" className="btn btn--white">
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

export default connect(mapStateToProps)(GoodWill);
