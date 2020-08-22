import React from "react";

const SingleTier = ({ tier: { title, description, icon } }) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={`feature-box__icon ${icon}`}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">{description}</p>
      </div>
    </div>
  );
};

export default SingleTier;
