import React, { useEffect } from "react";
import will1 from "../../styles/img/will1.jpg";
import will2 from "../../styles/img/will2.jpg";
import { connect } from "react-redux";

const Popup = ({ data }) => {
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
    }
  });
  const task = Object.keys(data).length !== 0 && data.leadershipTask[0];
  const renderPopup =
    Object.keys(data).length !== 0 ? (
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">LEADERSHIP</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">{task.title}</h3>
        <p className="popup__text">
          {task.body}
          <br />
          <b>Points : {task.points}</b>
        </p>
        <a href="task01_aol.html" className="btn btn--green">
          PLAY!
        </a>
      </div>
    ) : null;
  return (
    <div className="popup" id="popup2">
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
