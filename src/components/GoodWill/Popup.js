import React, { useState, useEffect } from "react";
import will1 from "../../styles/img/will1.jpg";
import will2 from "../../styles/img/will2.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../firebase/util";

const Popup = ({ data, user }) => {
  const [pending, setPending] = useState(false);
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    if (user.credentials && task) {
      db.collection("answers")
        .where("userRef", "==", user.credentials.ref)
        .where("taskRef", "==", task?.ref)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            setPending(false);
            setVerified(false);
            // console.log(querySnapshot);
          } else {
            if (querySnapshot.docs[0].data().likeCount > 4) {
              setVerified(true);
            } else {
              setPending(true);
            }
          }
        });
    }
  });
  const task = data.goodWillTask.length !== 0 && data.goodWillTask[0];
  const renderButton = pending ? (
    <span className="btn btn--green">PENDING</span>
  ) : verified ? (
    <span className="btn btn--green">
      VERIFIED COMPLETE OTHER CATEGORY TO GO TO NEXT LEVEL
    </span>
  ) : (
    <Link to={`/tasks/${task.ref}`} className="btn btn--green">
      PLAY
    </Link>
  );
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
        {renderButton}
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
    user: state.user,
  };
};

export default connect(mapStateToProps)(Popup);
