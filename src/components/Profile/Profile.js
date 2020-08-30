import React from "react";
import Navigation from "../Navigation/Navigation";
import LeftSider from "./LeftSider/LeftSider";
import Footer from "../Footer/Footer";
import UserInfo from "./UserInfo/UserInfo";
import { connect } from "react-redux";

const Profile = ({ user: { answers } }) => {
  const renderAnswers = !answers ? (
    <h1>Loading...</h1>
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
              <UserInfo />

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

export default connect(mapStateToProps)(Profile);
