import React from "react";
import Popup from "./Popup";

const GoodWill = () => {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--2">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--2">
              GOOD WILL
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>15 Tasks</li>
              <li>Become happier</li>
              <li>Elevate self-esteem</li>
              <li>Fewer negative emotions</li>
              <li>
                Difficulty: <b>MEDIUM</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-2">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">15 TASKS!</p>
            </div>
            <a href="#popup1" className="btn btn--white">
              START NOW!
            </a>
          </div>
        </div>
      </div>
      <Popup />
    </>
  );
};

export default GoodWill;
