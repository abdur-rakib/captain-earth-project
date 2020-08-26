import React from "react";
import dp from "../../styles/img/dp.jpg";

const SinglePost = () => {
  return (
    <div className="post">
      {/* <!-- post user info --> */}
      <div className="post__user">
        <div className="user">
          <div className="post__user__image">
            <img src={dp} alt="userpic" />
          </div>
          <div className="post__user__info">
            <h2 className="name">
              shopnil16
              {/* <span>🔥 Samiul Shopnil 🔥</span> */}
            </h2>
            <p>25 AUG 10:11AM</p>
          </div>
        </div>
        <div className="follow">
          <a href="/#">Follow</a>
        </div>
      </div>
      {/* <!-- post content --> */}
      <div className="post__content">
        {/* <!-- caption --> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolor
          dicta, saepe dolorem repudiandae laudantium temporibus illo ipsum
          neque facere ipsam qui eos iusto! Totam odit repellendus earum eveniet
          voluptatibus?
        </p>
        {/* <!-- uploaded file --> */}
        <div className="file">
          <video width="100%" controls>
            <source src="/img/video.mp4" type="video/mp4" />
            <source src="/img/video.webm" type="video/webm" />
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
