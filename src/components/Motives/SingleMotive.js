import React from "react";

const SingleMotive = ({ motive: { title, description } }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default SingleMotive;
