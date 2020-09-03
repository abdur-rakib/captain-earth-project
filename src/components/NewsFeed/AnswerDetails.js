import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/util";
import dayjs from "dayjs";
import Spinner from "../../utils/Spinner";
import "./SinglePost.css";
import Navigation from "../Navigation/Navigation";
import maskot from "../../styles/img/maskot.png";

const AnswerDetails = () => {
  const { answerRef } = useParams();
  const [answer, setAnswer] = useState(null);
  //   const [title, setTitle] = useState(null);
  useEffect(() => {
    db.doc(`/answers/${answerRef}`)
      .get()
      .then((doc) => {
        setAnswer(doc.data());
      });

    // eslint-disable-next-line
  }, []);
  console.log(answer);
  const renderPostDetail = answer ? (
    <main className="postdetail">
      <div className="postdetail__video">
        <video width="100%" controls>
          <source src={answer?.url} type="video/mp4" />
        </video>
      </div>

      <div className="postdetail__doc">
        <div className="doc">
          {/* <h1>{title}</h1> */}
          <div className="user">
            <div className="post__user__image">
              <img src={answer?.userImage} alt="userpic" />
            </div>
            <div className="post__user__info">
              <h2 className="name">{answer?.userName}</h2>
              <p style={{ textTransform: "uppercase" }}>
                {dayjs(answer?.createdAt).format("D MMM h:mm A")}
              </p>
            </div>
          </div>
          <div className="doc__caption">
            <p>{answer?.body}</p>
          </div>
        </div>
        <div className="responses">
          <div className="response response__btn">
            <span className="response__name">
              <i className="fas fa-download"></i>
            </span>
            <span className="response__count">{answer?.likeCount}</span>
          </div>
          <div className="response response__btn">
            <span className="response__name">
              <i className="fas fa-upload"></i>
            </span>
            <span className="response__count">{answer?.unlikeCount}</span>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <Spinner />
  );
  return (
    <>
      <Navigation />
      <header className="newsfeed">
        <Link to="/" className="newsfeed__logo-box">
          <img src={maskot} alt="Logo" className="newsfeed__logo" />
        </Link>
      </header>
      {renderPostDetail}
    </>
  );
};

export default AnswerDetails;
