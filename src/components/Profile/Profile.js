import React from "react";
import Navigation from "../Navigation/Navigation";
import LeftSider from "./LeftSider/LeftSider";
import Footer from "../Footer/Footer";
import UserInfo from "./UserInfo/UserInfo";
import { connect } from "react-redux";
import { getAuthenticatedUser } from "../../redux/actions/userAction";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/util";
import { useParams } from "react-router-dom";

import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 40px auto;
  border-color: red;
`;

const Profile = ({ user, getAuthenticatedUser }) => {
  const [answers, setAnswers] = useState(null);
  const [profile, setProfile] = useState(null);
  const { ref } = useParams();
  const renderAnswers = !answers ? (
    <PuffLoader css={override} size={150} color={"#123abc"} />
  ) : answers.length === 0 ? (
    <h1> No answers</h1>
  ) : (
    answers.map((answer, index) => (
      <div key={index} className="col-md-4 collam">
        <div className="content">
          <video width="100%" controls>
            <source src={answer.url} type="video/mp4" />
          </video>
        </div>
      </div>
    ))
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    // getAuthenticatedUser(ref);
    if (ref) {
      db.collection("answers")
        .orderBy("createdAt", "desc")
        .where("userRef", "==", ref)
        .onSnapshot((querySnapShot) => {
          const answers = [];
          querySnapShot.forEach((doc) => {
            answers.push(doc.data());
          });
          setAnswers(answers);
        });
    }

    // profile
    db.doc(`/users/${ref}`)
      .get()
      .then((doc) => {
        setProfile(doc.data());
      });
    // eslint-disable-next-line
  }, []);
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
  };
};

const mapActionsToProps = { getAuthenticatedUser };

export default connect(mapStateToProps, mapActionsToProps)(Profile);
