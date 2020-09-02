import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../firebase/util";
import { useState } from "react";
import Spinner from "../../utils/Spinner";
import dayjs from "dayjs";
import { FacebookShareButton, FacebookIcon } from "react-share";

const AnswerDetails = (props) => {
  const { answerRef } = useParams();
  // console.log(window.location.href);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    db.doc(`/answers/${answerRef}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAnswer(doc.data());
        } else {
          console.log("Not exists");
        }
      });
    // eslint-disable-next-line
  }, []);
  // const url = `${window.location.href}`;
  return (
    <div className="post">
      {/* <!-- post user info --> */}
      {answer ? (
        <>
          {/* Share button */}
          <FacebookShareButton
            url={`${window.location.href}`}
            // quote={"CampersTribe - World is yours to explore"}
            // hashtag="#camperstribe"
            // className={classes.socialMediaButton}
          >
            <FacebookIcon size={36} />
          </FacebookShareButton>

          {/* Share button */}
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
          <div className="post__content">
            {/* <!-- caption --> */}
            <p>
              {/* Task title : {answer.title}
              <br /> */}
              {answer.body}
            </p>
            {/* <!-- uploaded file --> */}
            <div className="file">
              <video width="100%" controls>
                <source src={answer.url} type="video/mp4" />
              </video>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AnswerDetails;
