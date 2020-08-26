import React from "react";
import SideLeaderBoard from "./SideLeaderBoard";
import SinglePost from "./SinglePost";

const Feed = () => {
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
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
            </div>
          </div>

          <SideLeaderBoard />
        </div>
      </div>
    </main>
  );
};

export default Feed;
