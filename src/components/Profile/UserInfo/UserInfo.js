import React from "react";
import { connect } from "react-redux";
// import { getIndividualUserAnswers } from "../../../redux/actions/userAction";
import person from "../../../styles/img/person.png";

const UserInfo = ({ profile }) => {
  return (
    <>
      {profile ? (
        <>
          <div className="user">
            {profile?.userImage === "" ? (
              <img src={person} alt="user" />
            ) : (
              <img
                className="user__image"
                src={profile?.userImage}
                alt="userProfile"
              />
            )}
            <div className="user__name">
              <div className="name">
                <div className="name__main">{profile?.userName}</div>
                {/* <p className="name__handle">Shopnil1603</p> */}
                <div className="name__point">
                  <span>Points</span>
                  {profile?.score}
                </div>
              </div>
            </div>
          </div>

          <div className="profile__bio">
            <p>WHO Score: {profile?.mentalScore}</p>
          </div>
        </>
      ) : null}
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
