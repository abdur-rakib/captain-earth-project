import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/util";
import Spinner from "../../utils/Spinner";
import person from "../../styles/img/person.png";
const SideLeaderBoard = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    db.collection("users")
      .orderBy("score", "desc")
      .onSnapshot((querySnapshot) => {
        let u = [];
        querySnapshot.forEach((doc) => {
          u.push(doc.data());
          // console.log(doc.data());
        });
        setUsers(u);
      });
  }, []);
  return (
    <div className="feed__rightsidebar">
      {/* <!-- right sidebar content --> */}
      <h1 className="heading-tertiary">Leaderboard</h1>

      <div className="top">
        <h2>Top accounts</h2>
        <div className="top__list">
          {users ? (
            users.map((user, index) => (
              <div key={user.ref} className="top__item">
                <div className="top__item__name">
                  <div
                    className="rank"
                    style={{ marginRight: "13px", fontSize: "23px" }}
                  >
                    {" "}
                    {index + 1 < 10 ? (
                      <h4>0{index + 1}</h4>
                    ) : (
                      <h4>{index + 1}</h4>
                    )}
                  </div>
                  {user.userImage === "" ? (
                    <img src={person} alt="user" />
                  ) : (
                    <img src={user.userImage} alt="user" />
                  )}
                  <div>
                    <p className="name">{user.userName}</p>
                  </div>
                </div>
                <div className="point"> {user.score} </div>
              </div>
            ))
          ) : (
            <Spinner />
          )}

          {/* <!-- top id  --> */}

          {/* <a className="seemore" href="/#">
            See more
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SideLeaderBoard;
