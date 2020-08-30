import React from "react";
import dayjs from "dayjs";
import { likeAnswer, disableLikeAnswer } from "../../redux/actions/dataAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/util";

const SinglePost = ({
  answer: {
    userName,
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
  likeAnswer,
  disableLikeAnswer,
  user,
}) => {
  // const [category, setCategory] = useState(null);
  // const [level, setLevel] = useState(null);
  const [title, setTitle] = useState(null);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    db.doc(`/tasks/${taskRef}`)
      .get()
      .then((res) => {
        // setCategory(res.data().category);
        // setLevel(res.data().level);
        setTitle(res.data().title);
      });
    // determine liked post or not
    db.collection("likes")
      .where("userName", "==", user.credentials.userName)
      .where("answerRef", "==", ref)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setLiked(false);
        } else setLiked(true);
      });
    // eslint-disable-next-line
  }, []);
  const singleAnswerlike = () => {
    likeAnswer(user.credentials?.userName, ref);
    setLiked(true);
  };
  const singleAnswerDisableLike = () => {
    disableLikeAnswer(user.credentials?.userName, ref);
    setLiked(false);
  };
  // console.log(unlikeCount);
  return (
    <div className="post">
      {/* <!-- post user info --> */}
      <div className="post__user">
        <div className="user">
          <div className="post__user__image">
            <img src={userImage} alt="userpic" />
          </div>
          <div className="post__user__info">
            <h2 className="name">
              {userName}
              {/* <span>🔥 Samiul Shopnil 🔥</span> */}
            </h2>
            <p style={{ textTransform: "uppercase" }}>
              {dayjs(createdAt).format("D MMM h:mm A")}
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
          {body}
        </p>
        {/* <!-- uploaded file --> */}
        <div className="file">
          <video width="100%" controls>
            <source src={url} type="video/mp4" />
          </video>
        </div>
        {/* <!-- response option --> */}
        <div className="responses">
          {/* Like button */}
          {liked ? (
            <div
              className="response"
              onClick={singleAnswerDisableLike}
              style={{ backgroundColor: "darkGray", borderRadius: "18px" }}
            >
              <span className="response__name">
                <i className="fas fa-upload"></i>
              </span>
              <span className="response__count">{likeCount}</span>
            </div>
          ) : (
            <div className="response" onClick={singleAnswerlike}>
              <span className="response__name">
                <i className="fas fa-upload"></i>
              </span>
              <span className="response__count">{likeCount}</span>
            </div>
          )}
          <div className="response">
            <span className="response__name">
              <i className="fas fa-download"></i>
            </span>
            <span className="response__count">{unlikeCount}</span>
          </div>
          <div className="response">
            <span className="response__name">
              <i className="far fa-share-square"></i>
            </span>
            <span className="response__count">{shareCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  likeAnswer,
  disableLikeAnswer,
};

export default connect(mapStateProps, mapActionsToProps)(SinglePost);
