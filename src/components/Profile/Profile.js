import React from "react";
import Navigation from "../Navigation/Navigation";
import LeftSider from "./LeftSider/LeftSider";
import Footer from "../Footer/Footer";
import UserInfo from "./UserInfo/UserInfo";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../utils/Spinner";

const Profile = ({ user, data }) => {
  const [answers, setAnswers] = useState(null);
  const [profile, setProfile] = useState(null);
  const { ref } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    //   db.collection("answers")
    //     .orderBy("createdAt", "desc")
    //     .where("userRef", "==", ref)
    //     .onSnapshot((querySnapShot) => {
    //       const answers = [];
    //       querySnapShot.forEach((doc) => {
    //         answers.push(doc.data());
    //       });
    //       setAnswers(answers);
    //     });
    // // profile
    // db.doc(`/users/${ref}`)
    //   .get()
    //   .then((doc) => {
    //     setProfile(doc.data());
    //   });

    setAnswers(data.answers?.filter((answer) => answer.userRef === ref));
    setProfile(user.users?.filter((user) => user.ref === ref)[0]);

    // eslint-disable-next-line
  }, []);

  const renderAnswers = !answers ? (
    <Spinner />
  ) : answers.length === 0 ? (
    <h1> No completed tasks</h1>
  ) : (
    answers.map((answer, index) => (
      <div key={index} className="col-md-4 collam">
        <div className="content">
          <video width="100%" controls>
            <source src={answer.url} type="video/mp4" />
          </video>
          <div className="content__heading">
            <h1>{answer.body.slice(0, 30)}...</h1>
            <p style={{ fontSize: "20px" }}>
              <i className="fas fa-upload"></i> <span>{answer.likeCount}</span>{" "}
              <i className="fas fa-download"></i>{" "}
              <span>{answer.unlikeCount}</span>
            </p>
          </div>
        </div>
      </div>
    ))
  );
  return (
    <>
      <Navigation />
      {/* <Header />
      <TaskProgress /> */}
      {/* ..................... */}
      <main style={{ marginTop: "50px" }} className="profilePage">
        <div className="feed">
          <div className="feed__row">
            <div className="feed__leftsidebar">
              {/* <!-- left sidebar content --> */}
              <LeftSider />
            </div>

            {/* <!-- profile part --> */}
            <div className="profile">
              <UserInfo profile={profile} />

              <div className="profile__upladedContent">
                <div className="row">{renderAnswers}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* ..................... */}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
