import React, { useEffect } from "react";
import SideLeaderBoard from "./SideLeaderBoard";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { getLikes } from "../../redux/actions/dataAction";
import LeftSiderBar from "./LeftSiderBar";

import Spinner from "../../utils/Spinner";

const Feed = ({ data, user, getLikes }) => {
  const { answers } = data;
  // const { credentials } = user;
  // console.log(answers);
  useEffect(() => {
    getLikes();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      {user.credentials ? (
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
                  <Spinner />
                )}
              </div>
            </div>

            <SideLeaderBoard />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
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
  getLikes,
};

export default connect(mapStateToProps, mapActionsToProps)(Feed);
