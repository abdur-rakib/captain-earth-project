import React from "react";
import { connect } from "react-redux";
import { getIndividualUserAnswers } from "../../../redux/actions/userAction";
import { useEffect } from "react";

const UserInfo = ({ user, getIndividualUserAnswers }) => {
  useEffect(() => {
    getIndividualUserAnswers(user.credentials?.userName);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="user">
        <img
          className="user__image"
          src={user.credentials?.userImage}
          alt="userProfile"
        />
        <div className="user__name">
          <div className="name">
            <div className="name__main">{user.credentials?.userName}</div>
            {/* <p className="name__handle">Shopnil1603</p> */}
            <div className="name__point">
              <span>Points</span>
              {user.credentials?.score}
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
        <p>
          I think, Life is not measured by the number of breaths you take, but
          the moments that take your breath away
        </p>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapActionsToProps = {
  getIndividualUserAnswers,
};
export default connect(mapStateToProps, mapActionsToProps)(UserInfo);