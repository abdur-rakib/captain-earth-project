import React, { useEffect } from "react";
import will1 from "../../styles/img/will1.jpg";
import will2 from "../../styles/img/will2.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Popup = ({ data }) => {
  useEffect(() => {
    if (data.goodWillTask.length !== 0) {
    }
  });
  const task = data.goodWillTask.length !== 0 && data.goodWillTask[0];
  const renderPopup =
    data.goodWillTask.length !== 0 ? (
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">GOOD WILL</h2>
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
    <div className="popup" id="popup1">
      <div className="popup__content">
        <div className="popup__left">
          <img src={will1} alt="Tour_photo" className="popup__img" />
          <img src={will2} alt="Tour_photo" className="popup__img" />
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
