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
import SinglePost from "../NewsFeed/SinglePost";
import "./Profile.css";

const Profile = ({ user, data }) => {
  const [answers, setAnswers] = useState(null);
  const [profile, setProfile] = useState(null);
  const { ref } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnswers(data.answers?.filter((answer) => answer.userRef === ref));
    setProfile(user.users?.filter((user) => user.ref === ref)[0]);

    // eslint-disable-next-line
  }, [data, user]);
  console.log(answers, profile);

  const renderAnswers = !answers ? (
    <Spinner />
  ) : answers.length === 0 ? (
    <h1> No completed tasks</h1>
  ) : (
    <div className="feed__feedbar profile__feed">
      <div className="feed__feedbar__posts profile__feed__posts">
        {answers.map((answer) => (
          <SinglePost key={answer.ref} answer={answer} />
        ))}
      </div>
    </div>
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
