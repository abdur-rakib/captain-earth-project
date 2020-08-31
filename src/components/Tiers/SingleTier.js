import React from "react";
import { connect } from "react-redux";
import "./Tiers.css";

const SingleTier = ({ tier: { title, description, icon }, user }) => {
  // const renderTier = user.credentials ? (
  //   <div
  //     className={`feature-box ${
  //       title === user.credentials.userLevel ? "myColor" : ""
  //     }`}
  //   >
  //     <i className={`feature-box__icon ${icon}`}></i>
  //     <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
  //     <p className="feature-box__text">{description}</p>
  //   </div>
  // ) : null;
  return (
    <div className="col-1-of-4">
      <div
        className={`feature-box ${
          title === user.credentials?.userLevel ? "myColor" : ""
        }`}
      >
        <i className={`feature-box__icon ${icon}`}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">{description}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SingleTier);
