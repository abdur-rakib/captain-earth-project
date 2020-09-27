import React from "react";
import dayjs from "dayjs";
import {
  likeAnswer,
  disableLikeAnswer,
  report,
} from "../../redux/actions/dataAction";
import { changeLevel } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/util";
import "./SinglePost.css";
import { FacebookShareButton } from "react-share";
import ReportDialogue from "./ReportDialogue";
import Video from "./Video";

import person from "../../styles/img/person.png";

const SinglePost = ({
  answer: {
    userName,
    userRef,
    userImage,
    createdAt,
    url,
    body,
    likeCount,
    shareCount,
    ref,
    taskRef,
    isBan,
  },
  likeAnswer,
  disableLikeAnswer,
  changeLevel,
  user,
  data,
  report,
}) => {
  const [liked, setLiked] = useState(false);
  // const [unliked, setUnliked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [points, setPoints] = useState(null);

  useEffect(() => {
    // console.log(ref);

    db.doc(`/tasks/${taskRef}`)
      .get()
      .then((res) => {
        setPoints(res.data().points);
      });

    // const p = data.tasks?.filter((task) => task.ref === taskRef)[0];
    // setPoints(p.points);

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
  }, [user]);
  // console.log(user.credentials.ref);

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

  return (
    <>
      {!isBan && (
        <div className="post">
          {/* <!-- post user info --> */}
          <div className="post__user">
            <div className="user">
              <div className="post__user__image">
                {userImage === "" ? (
                  <img src={person} alt="user" />
                ) : (
                  <img src={userImage} alt="user" />
                )}
              </div>
              <div className="post__user__info">
                <h2 className="name">{userName}</h2>
                <p style={{ textTransform: "uppercase" }}>
                  {dayjs(createdAt).format("D MMM h:mm A")}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- post content --> */}
          <div className="post__content">
            {/* <!-- caption --> */}
            <p>{body}</p>
            {/* <!-- uploaded file --> */}
            <div className="file">
              {/* <video width="100%" controls>
                <source src={url} type="video/mp4" />
              </video> */}
              <Video url={url} />
            </div>
            {/* <!-- response option --> */}
            <div className="responses">
              {/* Like button */}
              {liked ? (
                <span
                  title="like"
                  disabled={disabled}
                  className={`response response__btn ${
                    disabled ? "myCursor" : ""
                  }`}
                  onClick={singleAnswerDisableLike}
                >
                  <span className="response__name">
                    <i style={{ color: "red" }} className="fas fa-heart"></i>
                  </span>
                  <span className="response__count">{likeCount}</span>
                </span>
              ) : (
                <span
                  title="like"
                  disabled={disabled}
                  className={`response response__btn ${
                    disabled ? "myCursor" : ""
                  }`}
                  onClick={singleAnswerlike}
                >
                  <span className="response__name">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="response__count">{likeCount}</span>
                </span>
              )}

              <FacebookShareButton
                url={`https://captain-earth.com/answer/${ref}`}
                quote={`${userName} has done an amazing job! Check it out.`}
                hashtag="#captainearth"
                className={`response response__btn ${
                  disabled ? "myCursor" : ""
                }`}
              >
                <span className="response__name">
                  <i className="fas fa-share-square"></i>
                  <span className="response__count">{shareCount}</span>
                </span>
              </FacebookShareButton>

              <ReportDialogue
                answerRef={ref}
                userRef={userRef}
                url={url}
                body={body}
              />
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
  changeLevel,
  report,
};

export default connect(mapStateProps, mapActionsToProps)(SinglePost);

// import React from "react";
// import dayjs from "dayjs";
// import {
//   likeAnswer,
//   disableLikeAnswer,
//   report,
// } from "../../redux/actions/dataAction";
// import { changeLevel } from "../../redux/actions/userAction";
// import { connect } from "react-redux";
// import { useEffect } from "react";
// import { useState } from "react";
// import { db } from "../../firebase/util";
// import "./SinglePost.css";
// import { FacebookShareButton } from "react-share";
// import ReportDialogue from "./ReportDialogue";

// import person from "../../styles/img/person.png";

// const SinglePost = ({
//   answer: {
//     userName,
//     userRef,
//     userImage,
//     createdAt,
//     url,
//     body,
//     likeCount,
//     shareCount,
//     ref,
//     taskRef,
//     isBan,
//   },
//   likeAnswer,
//   disableLikeAnswer,
//   changeLevel,
//   user,
//   data,
//   report,
// }) => {
//   // const [category, setCategory] = useState(null);
//   // const [level, setLevel] = useState(null);
//   const [title, setTitle] = useState(null);
//   const [liked, setLiked] = useState(false);
//   // const [unliked, setUnliked] = useState(false);
//   const [disabled, setDisabled] = useState(false);
//   const [points, setPoints] = useState(null);
//   useEffect(() => {
//     db.doc(`/tasks/${taskRef}`)
//       .get()
//       .then((res) => {
//         // setCategory(res.data().category);
//         // setLevel(res.data().level);
//         setTitle(res.data().title);
//         setPoints(res.data().points);
//       });
//     // determine liked post or not
//     db.collection("likes")
//       .where("userRef", "==", user.credentials.ref)
//       .where("answerRef", "==", ref)
//       .get()
//       .then((querySnapshot) => {
//         if (querySnapshot.empty) {
//           setLiked(false);
//         } else setLiked(true);
//       });
//     // eslint-disable-next-line
//   }, []);
//   // Single Answer Like

//   const singleAnswerlike = () => {
//     likeAnswer(user.credentials?.ref, userRef, ref, points);
//     // Change level or not
//     setTimeout(() => {
//       changeLevel(userRef);
//     }, 3000);
//     setLiked(true);
//     setDisabled(true);
//     setTimeout(() => {
//       setDisabled(false);
//     }, 2000);
//   };
//   const singleAnswerDisableLike = () => {
//     disableLikeAnswer(user.credentials?.ref, ref);
//     setLiked(false);
//     setDisabled(true);
//     setTimeout(() => {
//       setDisabled(false);
//     }, 2000);
//   };

//   return (
//     <>
//       {!isBan && (
//         <div className="post">
//           {/* <!-- post user info --> */}
//           <div className="post__user">
//             <div className="user">
//               <div className="post__user__image">
//                 {userImage === "" ? (
//                   <img src={person} alt="user" />
//                 ) : (
//                   <img src={userImage} alt="user" />
//                 )}
//               </div>
//               <div className="post__user__info">
//                 <h2 className="name">{userName}</h2>
//                 <p style={{ textTransform: "uppercase" }}>
//                   {dayjs(createdAt).format("D MMM h:mm A")}
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* <!-- post content --> */}
//           <div className="post__content">
//             {/* <!-- caption --> */}
//             <p>
//               Task title : {title}
//               <br />
//               {body}
//             </p>
//             {/* <!-- uploaded file --> */}
//             <div className="file">
//               <video width="100%" controls>
//                 <source src={url} type="video/mp4" />
//               </video>
//             </div>
//             {/* <!-- response option --> */}
//             <div className="responses">
//               {/* Like button */}
//               {liked ? (
//                 <span
//                   title="like"
//                   disabled={disabled}
//                   className={`response response__btn ${
//                     disabled ? "myCursor" : ""
//                   }`}
//                   onClick={singleAnswerDisableLike}
//                 >
//                   <span className="response__name">
//                     <i style={{ color: "red" }} className="fas fa-heart"></i>
//                   </span>
//                   <span className="response__count">{likeCount}</span>
//                 </span>
//               ) : (
//                 <span
//                   title="like"
//                   disabled={disabled}
//                   className={`response response__btn ${
//                     disabled ? "myCursor" : ""
//                   }`}
//                   onClick={singleAnswerlike}
//                 >
//                   <span className="response__name">
//                     <i className="far fa-heart"></i>
//                   </span>
//                   <span className="response__count">{likeCount}</span>
//                 </span>
//               )}

//               <FacebookShareButton
//                 url={`https://captain-earth.com/answer/${ref}`}
//                 quote={`${userName} has done an amazing job! Check it out.`}
//                 hashtag="#captainearth"
//                 className={`response response__btn ${
//                   disabled ? "myCursor" : ""
//                 }`}
//               >
//                 <span className="response__name">
//                   <i className="fas fa-share-square"></i>
//                   <span className="response__count">{shareCount}</span>
//                 </span>
//               </FacebookShareButton>

//               <ReportDialogue
//                 answerRef={ref}
//                 userRef={user.credentials?.ref}
//                 url={url}
//                 body={body}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// const mapStateProps = (state) => {
//   return {
//     user: state.user,
//     data: state.data,
//   };
// };
// const mapActionsToProps = {
//   likeAnswer,
//   disableLikeAnswer,
//   changeLevel,
//   report,
// };

// export default connect(mapStateProps, mapActionsToProps)(SinglePost);
