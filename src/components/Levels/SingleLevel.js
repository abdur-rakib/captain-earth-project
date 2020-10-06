import React from "react";
import { connect } from "react-redux";
import "./Tiers.css";

import Badge1 from '../../styles/img/batch/3.png'
import Badge2 from '../../styles/img/batch/2.png'
import Badge3 from '../../styles/img/batch/1.png'
import Badge4 from '../../styles/img/batch/0.png'

// const SingleTier = ({ level: { ref, title, description, icon }, user }) => {
const SingleTier = () => {
  return (
    <div class="index__levels-box">
      <div class="index__level">
        <img src={Badge1} alt="" width="100px" />
        <div class="level">
          <div class="level-description">
            <h1>COMMONER</h1>
            <p>Start your game as a 'Commoner'. Complete simple tasks & earn points to reach the next level.</p>
          </div>
        </div>
      </div>

      <div class="index__level">
        <img src={Badge2} alt="" width="100px" />
        <div class="level">
          <div class="level-description">
            <h1>FASCINATING</h1>
            <p>Tasks in this phase will be a bit different from the previous level. So to make your mark, you have to play to the gallery.</p>
          </div>
        </div>
      </div>

      <div class="index__level">
        <img src={Badge3} alt="" width="100px" />
        <div class="level">
          <div class="level-description">
            <h1>EXCEPTIONAL</h1>
            <p>Tasks won't be so easy in this phase as they are designed to enhance your mental and emotional well being. So buckle up for the mumble jumble.</p>
          </div>
        </div>
      </div>

      <div class="index__level">
        <img src={Badge4} alt="" width="100px" />
        <div class="level">
          <div class="level-description">
            <h1>LEGEND</h1>
            <p>These tasks are specially created to test your virtues and skills on every level. It'll be hard but the rewards are worth it. So, play smart to upgrade yourself and the vibration of the earth.</p>
          </div>
        </div>
      </div>
    </div>

    // OLD
    // </div> <div className="col-1-of-4">
    //   <div
    //     className={`feature-box ${
    //       ref === user.credentials?.level ? "myColor" : ""
    //     }`}
    //   >
    //     <i className={`feature-box__icon ${icon}`}></i>
    //     <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
    //     <p className="feature-box__text">{description}</p>
    //   </div>
    // </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SingleTier);
