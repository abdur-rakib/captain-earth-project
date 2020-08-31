import React, { useEffect } from "react";
import SideLeaderBoard from "./SideLeaderBoard";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { getAnswers } from "../../redux/actions/dataAction";
import LeftSiderBar from "./LeftSiderBar";

import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 40px auto;
  border-color: red;
`;

const Feed = ({ getAnswers, data, user }) => {
  const { answers } = data;
  // const { credentials } = user;
  // console.log(answers);
  useEffect(() => {
    getAnswers();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      <div className="feed">
        <div className="feed__row">
          <div className="feed__leftsidebar">
            {/* <!-- left sidebar content --> */}
            <LeftSiderBar />
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
                <PuffLoader css={override} size={150} color={"#123abc"} />
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
    user: state.user,
  };
};

const mapActionsToProps = {
  getAnswers,
};

export default connect(mapStateToProps, mapActionsToProps)(Feed);
