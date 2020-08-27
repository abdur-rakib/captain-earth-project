import React, { useEffect } from "react";
import SideLeaderBoard from "./SideLeaderBoard";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { getAnswers } from "../../redux/actions/dataAction";

const Feed = ({ getAnswers, data }) => {
  const { answers } = data;
  useEffect(() => {
    getAnswers();
    window.scrollTo(0, 0);
    // setAnswers(data.answers);
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      <div className="feed">
        <div className="feed__row">
          <div className="feed__leftsidebar">
            {/* <!-- left sidebar content --> */}
          </div>

          <div className="feed__feedbar">
            {/* <!-- main content --> */}
            <h1 className="heading-tertiary">Post</h1>
            {/* <!-- all posts --> */}
            <div className="feed__feedbar__posts">
              {answers ? (
                answers.map((answer) => (
                  <SinglePost key={answer.ref} answer={answer} />
                ))
              ) : (
                <h1> Loading.... </h1>
              )}
            </div>
          </div>

          <SideLeaderBoard />
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapActionsToProps = {
  getAnswers,
};

export default connect(mapStateToProps, mapActionsToProps)(Feed);
