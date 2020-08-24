import React, { useEffect } from "react";
import love1 from "../../styles/img/love1.jpg";
import love2 from "../../styles/img/love2.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Popup = ({ data }) => {
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
    }
  });
  const task = Object.keys(data).length !== 0 && data.actsOfLoveTask[0];
  const renderPopup =
    Object.keys(data).length !== 0 ? (
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">
          ACTS OF LOVE
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">{task.title}</h3>
        <p className="popup__text">
          {task.body}
          <br />
          <b>Points : {task.points}</b>
        </p>
        <Link to={`/task/${task.ref}`} className="btn btn--green">
          PLAY!
        </Link>
      </div>
    ) : null;
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={love1} alt="Tour_photo" className="popup__img" />
          <img src={love2} alt="Tour_photo" className="popup__img" />
        </div>
        {renderPopup}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Popup);
