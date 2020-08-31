import React, { useState, useEffect } from "react";
import will1 from "../../styles/img/will1.jpg";
import will2 from "../../styles/img/will2.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../firebase/util";
import { required_likes } from "../../utils/utils";

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
            if (
              querySnapshot.docs[0].data().likeCount > required_likes - 1 &&
              querySnapshot.docs[0].data().completed === false
            ) {
              db.doc(`/answers/${querySnapshot.docs[0].id}`)
                .update({
                  completed: true,
                })
                .then(() => {
                  db.doc(`/users/${user.credentials?.ref}`)
                    .get()
                    .then((doc) => {
                      if (doc.exists) {
                        db.doc(`/users/${user.credentials?.ref}`)
                          .update({
                            score: doc.data().score + task.points,
                          })
                          .then(() => {
                            setVerified(true);
                          });
                      }
                    });
                });
            } else if (
              querySnapshot.docs[0].data().likeCount > required_likes - 1 &&
              querySnapshot.docs[0].data().completed === true
            ) {
              setVerified(true);
            } else {
              setPending(true);
            }
          }
        });
    }
  }, []);
  const task = data.goodWillTask.length !== 0 && data.goodWillTask[0];
  const renderButton = pending ? (
    <span className="btn btn--green">PENDING</span>
  ) : verified ? (
    <span className="btn btn--green">COMPLETE OTHER TASK TO GO NEXT LEVEL</span>
  ) : (
    <Link to={`/task/${task.ref}`} className="btn btn--green">
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
