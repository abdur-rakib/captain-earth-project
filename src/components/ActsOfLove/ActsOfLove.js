import React from "react";
import Popup from "./Popup";

const ActsOfLove = () => {
  return (
    <>
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--1">
              ACTS OF LOVE
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>15 Task</li>
              <li>Practice Kindness</li>
              <li>Be a spark of hope</li>
              <li>Enhance emotional well-being</li>
              <li>
                Difficulty: <b>EASY</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">15 TASKS!</p>
            </div>
            <a href="#popup" className="btn btn--white">
              START NOW!
            </a>
          </div>
        </div>
      </div>
      <Popup />
    </>
  );
};

export default ActsOfLove;
