import React from "react";
import dayjs from "dayjs";
import {
  likeAnswer,
  disableLikeAnswer,
  unlikeAnswer,
  disableUnlikeAnswer,
  report,
} from "../../redux/actions/dataAction";
import { changeLevel } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/util";
import "./SinglePost.css";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const AnswerDetails = ({
  likeAnswer,
  disableLikeAnswer,
  unlikeAnswer,
  disableUnlikeAnswer,
  changeLevel,
  user,
  data,
  report,
}) => {
  const { id } = useParams();
  // const [category, setCategory] = useState(null);
  // const [level, setLevel] = useState(null);
  const [title, setTitle] = useState(null);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [points, setPoints] = useState(null);
  const [answer, setAnswer] = useState(null);

  // {
  //   userName,
  //   userRef,
  //   userImage,
  //   createdAt,
  //   url,
  //   body,
  //   likeCount,
  //   unlikeCount,
  //   shareCount,
  //   ref,
  //   taskRef,

  // }
  useEffect(() => {
    if (answer) {
      db.doc(`/tasks/${answer.taskRef}`)
        .get()
        .then((res) => {
          // setCategory(res.data().category);
          // setLevel(res.data().level);
          setTitle(res.data().title);
          setPoints(res.data().points);
        });
      // determine liked post or not
      db.collection("likes")
        .where("userRef", "==", user.credentials.ref)
        .where("answerRef", "==", answer.ref)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            setLiked(false);
          } else setLiked(true);
        });
    }

    db.doc(`/answers/${id}`)
      .get()
      .then((doc) => {
        setAnswer(doc.data);
      });

    // eslint-disable-next-line
  }, [answer]);
  // Single Answer Like
  const singleAnswerlike = () => {
    likeAnswer(user.credentials?.ref, answer.userRef, answer.ref, points);
    // Change level or not
    setTimeout(() => {
      changeLevel(answer.userRef);
    }, 3000);
    setLiked(true);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  const singleAnswerDisableLike = () => {
    disableLikeAnswer(user.credentials?.ref, answer.ref);
    setLiked(false);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  // Single Answer Unlike
  const singleAnswerUnlike = () => {
    unlikeAnswer(user.credentials?.ref, answer.ref);
    setUnliked(true);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  const singleAnswerDisableUnlike = () => {
    disableUnlikeAnswer(user.credentials?.ref, answer.ref);
    setUnliked(false);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  console.log(answer);
  return (
    <>
      {answer && (
        <div className="post">
          {/* <!-- post user info --> */}
          <div className="post__user">
            <div className="user">
              <div className="post__user__image">
                <img src={answer.userImage} alt="userpic" />
              </div>
              <div className="post__user__info">
                <h2 className="name">
                  {answer.userName}
                  {/* <span>🔥 Samiul Shopnil 🔥</span> */}
                </h2>
                <p style={{ textTransform: "uppercase" }}>
                  {dayjs(answer.createdAt).format("D MMM h:mm A")}
                </p>
              </div>
            </div>
            {/* <div className="follow">
          <a href="/#">Follow</a>
        </div> */}
          </div>
          {/* <!-- post content --> */}
          <div className="post__content">
            {/* <!-- caption --> */}
            <p>
              Task title : {title}
              <br />
              {answer.body}
            </p>
            {/* <!-- uploaded file --> */}
            <div className="file">
              <video width="100%" controls>
                <source src={answer.url} type="video/mp4" />
              </video>
            </div>
            {/* <!-- response option --> */}
            <div className="responses">
              {/* Like button */}
              {liked ? (
                <button
                  title="like"
                  disabled={disabled}
                  className="response response__btn"
                  onClick={singleAnswerDisableLike}
                  style={{ backgroundColor: "darkGray", borderRadius: "18px" }}
                >
                  <span className="response__name">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="response__count">{answer.likeCount}</span>
                </button>
              ) : (
                <button
                  title="like"
                  disabled={disabled}
                  className="response response__btn"
                  onClick={singleAnswerlike}
                >
                  <span className="response__name">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="response__count">{answer.likeCount}</span>
                </button>
              )}
              {/* Unlike button */}
              {unliked ? (
                <button
                  title="unlike"
                  disabled={disabled}
                  className="response response__btn"
                  onClick={singleAnswerDisableUnlike}
                  style={{ backgroundColor: "darkGray", borderRadius: "18px" }}
                >
                  <span className="response__name">
                    <i className="fas fa-download"></i>
                  </span>
                  <span className="response__count">{answer.unlikeCount}</span>
                </button>
              ) : (
                <button
                  disabled={disabled}
                  title="unlike"
                  className="response response__btn"
                  onClick={singleAnswerUnlike}
                >
                  <span className="response__name">
                    <i className="fas fa-download"></i>
                  </span>
                  <span className="response__count">{answer.unlikeCount}</span>
                </button>
              )}

              {/* <Link
            title="share"
            // to={`/answer/${ref}`}
            to={{
              pathname: `/answer/${ref}`,
              query: {
                userName,
                userRef,
                userImage,
                createdAt,
                url,
                body,
                likeCount,
                unlikeCount,
                shareCount,
                ref,
                taskRef,
              },
            }}
            className="response response__btn"
          >
            <span className="response__name">
              <i className="fas fa-share-square"></i>
            </span>
          </Link> */}
              <button
                disabled={disabled}
                title="report"
                className="response response__btn"
                // onClick={() => report(ref, user.credentials?.ref)}
              >
                <span className="response__name">
                  <i className="fas fa-flag-checkered"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};
const mapActionsToProps = {
  likeAnswer,
  disableLikeAnswer,
  unlikeAnswer,
  disableUnlikeAnswer,
  changeLevel,
  report,
};

export default connect(mapStateProps, mapActionsToProps)(AnswerDetails);

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { db } from "../../firebase/util";

// const AnswerDetails = () => {
//   const { answerRef } = useParams();
//   useEffect(() => {
//     db.doc(`/answers/${answerRef}`)
//       .get()
//       .then((doc) => {
//         console.log(doc.data());
//       });
//   }, []);
//   console.log(answerRef);
//   return <div></div>;
// };

// export default AnswerDetails;
