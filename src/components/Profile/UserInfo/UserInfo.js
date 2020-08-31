import React from "react";
import { connect } from "react-redux";
// import { getIndividualUserAnswers } from "../../../redux/actions/userAction";

const UserInfo = ({ profile }) => {
  return (
    <>
      <div className="user">
        <img
          className="user__image"
          src={profile?.userImage}
          alt="userProfile"
        />
        <div className="user__name">
          <div className="name">
            <div className="name__main">{profile?.userName}</div>
            {/* <p className="name__handle">Shopnil1603</p> */}
            <div className="name__point">
              <span>Points</span>
              {profile?.score}
            </div>
          </div>
          {/* <p>Shopnil1603</p> */}
          {/* <!-- if it is not user --> */}
          {/* <div className="link__follow">
            <a className="followLink" href="#">
              Follow
            </a>
      
          </div> */}
        </div>
      </div>
      {/* <div className="profile__activity">
        <div>
          {" "}
          <h1>
            4.2k <span>follower</span>
          </h1>{" "}
        </div>
        <div>
          {" "}
          <h1>
            121 <span>following</span>
          </h1>{" "}
        </div>
      </div> */}
      <div className="profile__bio">
        <p>Mental condition: Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(UserInfo);
