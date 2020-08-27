import React from "react";
// import dp from "../../styles/img/dp.jpg";
import dayjs from "dayjs";

const SinglePost = ({
  answer: { userName, userImage, createdAt, url, body },
}) => {
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
            <p>{dayjs(createdAt).format("D MMM h:mm A")}</p>
          </div>
        </div>
        <div className="follow">
          <a href="/#">Follow</a>
        </div>
      </div>
      {/* <!-- post content --> */}
      <div className="post__content">
        {/* <!-- caption --> */}
        <p>{body}</p>
        {/* <!-- uploaded file --> */}
        <div className="file">
          <video width="100%" controls>
            <source src={url} type="video/mp4" />
          </video>
        </div>
        {/* <!-- response option --> */}
        <div className="responses">
          <div className="response">
            <a href="/#" className="response__name">
              <i className="far fa-heart"></i>
            </a>
            <a href="/#" className="response__count">
              812
            </a>
          </div>
          <div className="response">
            <a href="/#" className="response__name">
              <i className="far fa-comment-dots"></i>
            </a>
            <a href="/#" className="response__count">
              119
            </a>
          </div>
          <div className="response">
            <a href="/#" className="response__name">
              <i className="far fa-share-square"></i>
            </a>
            <a href="/#" className="response__count">
              56
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
