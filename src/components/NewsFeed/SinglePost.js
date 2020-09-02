import React from "react";
import dayjs from "dayjs";
import {
  likeAnswer,
  disableLikeAnswer,
  unlikeAnswer,
  disableUnlikeAnswer,
} from "../../redux/actions/dataAction";
import { changeLevel } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/util";
import "./SinglePost.css";
import { Link } from "react-router-dom";

const SinglePost = ({
  answer: {
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
  likeAnswer,
  disableLikeAnswer,
  unlikeAnswer,
  disableUnlikeAnswer,
  changeLevel,
  user,
  data,
}) => {
  // const [category, setCategory] = useState(null);
  // const [level, setLevel] = useState(null);
  const [title, setTitle] = useState(null);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [points, setPoints] = useState(null);
  useEffect(() => {
    db.doc(`/tasks/${taskRef}`)
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
      .where("answerRef", "==", ref)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setLiked(false);
        } else setLiked(true);
      });
    // eslint-disable-next-line
  }, []);
  // Single Answer Like
  const singleAnswerlike = () => {
    likeAnswer(user.credentials?.ref, userRef, ref, points);
    // Change level or not
    setTimeout(() => {
      changeLevel(userRef);
    }, 3000);
    setLiked(true);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  const singleAnswerDisableLike = () => {
    disableLikeAnswer(user.credentials?.ref, ref);
    setLiked(false);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  // Single Answer Unlike
  const singleAnswerUnlike = () => {
    unlikeAnswer(user.credentials?.ref, ref);
    setUnliked(true);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  const singleAnswerDisableUnlike = () => {
    disableUnlikeAnswer(user.credentials?.ref, ref);
    setUnliked(false);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  // console.log(points);
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
            <button
              disabled={disabled}
              className="response response__btn"
              onClick={singleAnswerDisableLike}
              style={{ backgroundColor: "darkGray", borderRadius: "18px" }}
            >
              <span className="response__name">
                <i className="fas fa-upload"></i>
              </span>
              <span className="response__count">{likeCount}</span>
            </button>
          ) : (
            <button
              disabled={disabled}
              className="response response__btn"
              onClick={singleAnswerlike}
            >
              <span className="response__name">
                <i className="fas fa-upload"></i>
              </span>
              <span className="response__count">{likeCount}</span>
            </button>
          )}
          {/* Unlike button */}
          {unliked ? (
            <button
              disabled={disabled}
              className="response response__btn"
              onClick={singleAnswerDisableUnlike}
              style={{ backgroundColor: "darkGray", borderRadius: "18px" }}
            >
              <span className="response__name">
                <i className="fas fa-download"></i>
              </span>
              <span className="response__count">{unlikeCount}</span>
            </button>
          ) : (
            <button
              disabled={disabled}
              className="response response__btn"
              onClick={singleAnswerUnlike}
            >
              <span className="response__name">
                <i className="fas fa-download"></i>
              </span>
              <span className="response__count">{unlikeCount}</span>
            </button>
          )}

          <Link to={`/answer/${ref}`} className="response response__btn">
            <span className="response__name">
              <i className="fas fa-share-square"></i>
            </span>
            {/* <span className="response__count">{shareCount}</span> */}
          </Link>
        </div>
      </div>
    </div>
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
};

export default connect(mapStateProps, mapActionsToProps)(SinglePost);
