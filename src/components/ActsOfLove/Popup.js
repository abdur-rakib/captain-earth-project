import React, { useEffect } from "react";
import love1 from "../../styles/img/love1.jpg";
import love2 from "../../styles/img/love2.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
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
                        console.log(doc.data().score);
                        console.log(task.points);
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
  const task = data.actsOfLoveTask.length !== 0 && data.actsOfLoveTask[0];

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
    data.actsOfLoveTask.length !== 0 ? (
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
        {renderButton}
      </div>
    ) : null;
  // console.log(task);
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
    user: state.user,
  };
};

export default connect(mapStateToProps)(Popup);
