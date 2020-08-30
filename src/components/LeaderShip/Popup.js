import React, { useState, useEffect } from "react";
import lead1 from "../../styles/img/lead1.jpg";
import lead2 from "../../styles/img/lead2.jpg";
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
            // console.log(querySnapshot.docs[0].data().likeCount);
            if (
              querySnapshot.docs[0].data().likeCount > 4 &&
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
              querySnapshot.docs[0].data().likeCount > 4 &&
              querySnapshot.docs[0].data().completed === true
            ) {
              setVerified(true);
            } else {
              setPending(true);
            }
          }
        });
    }
  });
  const task = data.leadershipTask.length !== 0 && data.leadershipTask[0];
  const renderButton = pending ? (
    <span className="btn btn--green">PENDING</span>
  ) : verified ? (
    <span className="btn btn--green">
      VERIFIED COMPLETE OTHER CATEGORY TO GO TO NEXT LEVEL
    </span>
  ) : (
    <Link to={`/task/${task.ref}`} className="btn btn--green">
      PLAY
    </Link>
  );
  const renderPopup =
    data.leadershipTask.length !== 0 ? (
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
        {renderButton}
      </div>
    ) : null;
  return (
    <div className="popup" id="popup2">
      <div className="popup__content">
        <div className="popup__left">
          <img src={lead1} alt="Tour_photo" className="popup__img" />
          <img src={lead2} alt="Tour_photo" className="popup__img" />
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
