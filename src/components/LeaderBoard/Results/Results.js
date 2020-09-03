import React from "react";
import security from "../../../styles/img/batch/security.png";
import fire from "../../../styles/img/batch/fire.png";
import puzzle from "../../../styles/img/batch/puzzle.png";
import copyright from "../../../styles/img/batch/copyright.png";
import all from "../../../styles/img/money.png";

import zero from "../../../styles/img/batch/0.png";
import one from "../../../styles/img/batch/1.png";
import two from "../../../styles/img/batch/2.png";
import three from "../../../styles/img/batch/3.png";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../firebase/util";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../../utils/Spinner";

import person from "../../../styles/img/person.png";

// helper function
const renderBadges = (level) => {
  switch (level) {
    case 3:
      return (
        <div className="badges__box">
          <img src={zero} alt="zero" />
          <img src={one} alt="one" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
        </div>
      );
    case 2:
      return (
        <div className="badges__box">
          <img src={one} alt="one" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
        </div>
      );
    case 1:
      return (
        <div className="badges__box">
          <img src={two} alt="two" />
          <img src={three} alt="three" />
        </div>
      );
    case 0:
      return (
        <div className="badges__box">
          <img src={three} alt="three" />
        </div>
      );
    default:
      return;
  }
};

const Results = ({ user }) => {
  const [users, setUsers] = useState(null);
  const [myInfo, setMyInfo] = useState(null);
  useEffect(() => {
    db.collection("users")
      .orderBy("score", "desc")
      .onSnapshot((querySnapshot) => {
        let u = [];
        let rank = 1;
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          if (doc.data().ref === user.credentials?.ref) {
            setMyInfo({
              ...doc.data(),
              rank,
            });
          }
          u.push({
            ...doc.data(),
            rank,
          });
          ++rank;
        });
        setUsers(u);
      });
    // eslint-disable-next-line
  }, [user.credentials]);
  console.log(users);
  return (
    <>
      {/* // <!-- Top heading --> */}
      <div className="heading__box">
        <h1 className="heading-secondary">Leaderboard</h1>
      </div>

      {/* // <!-- leaderboard categories --> */}
      <div className="leaderCategory">
        <div className="leaderCategory__type">
          <img src={all} alt="security" />
          <h2>ALL LEAGUE</h2>
        </div>
        <div className="leaderCategory__type">
          <img src={security} alt="security" />
          <h2>LEGEND LEAGUE</h2>
        </div>
        <div className="leaderCategory__type">
          <img src={fire} alt="fire" />
          <h2>EXCEPTIONAL LEAGUE</h2>
        </div>
        <div className="leaderCategory__type">
          <img src={puzzle} alt="puzzle" />
          <h2>FASCINATING LEAGUE </h2>
        </div>
        <div className="leaderCategory__type">
          <img src={copyright} alt="copyright" />
          <h2>COMMONER LEAGUE</h2>
        </div>
      </div>

      {/* <!-- Ranking --> */}
      <div className="ranking">
        {user.credentials && (
          <>
            <h1>Your rank</h1>
            <div className="ranking__personal">
              <div className="data">
                <div className="data__item rank">
                  <h2>0{myInfo?.rank}</h2>
                </div>
                <div className="data__item userInfo">
                  <div className="user">
                    {myInfo?.userImage === "" ? (
                      <img src={person} alt="user" />
                    ) : (
                      <img src={myInfo?.userImage} alt="user" />
                    )}
                    <div className="user__name">
                      <h2>{myInfo?.userName}</h2>
                    </div>
                  </div>
                </div>
                <div className="data__item point">
                  <h2>{myInfo?.score}</h2>
                </div>
                <div className="data__item badges">
                  {/* <!-- badgees --> */}
                  {renderBadges(myInfo?.level)}
                </div>
              </div>
            </div>
          </>
        )}

        {/* <!-- global ranking --> */}
        <h1>Global ranking</h1>
        <div className="ranking__global">
          {/* <!-- table heading --> */}
          <div className="data heading">
            <div className="data__item rank">
              <h2>Rank</h2>
            </div>
            <div className="data__item userInfo">
              <h2>Username</h2>
            </div>
            <div className="data__item point">
              <h2>Point</h2>
            </div>
            <div className="data__item badges">
              <h2>Badges</h2>
            </div>
          </div>
          {/* <!-- table data --> */}

          {/* <!-- rank-1 --> */}
          {users ? (
            users.map((user) => (
              <div key={user.rank} className="data">
                <div className="data__item rank">
                  <h2>0{user.rank}</h2>
                </div>
                <div className="data__item userInfo">
                  <div className="user">
                    {user.userImage === "" ? (
                      <img src={person} alt="user" />
                    ) : (
                      <img src={user.userImage} alt="user" />
                    )}
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/user/${user.ref}`}
                      className="user__name"
                    >
                      <h2>{user.userName}</h2>
                    </Link>
                  </div>
                </div>
                <div className="data__item point">
                  <h2>{user.score}</h2>
                </div>
                <div className="data__item badges">
                  {renderBadges(user.level)}
                </div>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
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

export default connect(mapStateToProps, mapActionsToProps)(Results);
