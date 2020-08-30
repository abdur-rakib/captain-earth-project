import React from "react";
import dp from "../../styles/img/dp.jpg";

const SideLeaderBoard = () => {
  return (
    <div className="feed__rightsidebar">
      {/* <!-- right sidebar content --> */}
      <h1 className="heading-tertiary">Leaderboard</h1>

      <div className="top">
        <h2>Top accounts</h2>
        <div className="top__list">
          {/* <!-- top id  --> */}
          <div className="top__item">
            <div className="top__item__name">
              <img src={dp} alt="" />
              <div>
                <p className="name">Shamiul Shopnil</p>
                <p className="username">Shopnil16</p>
              </div>
            </div>
            <div className="rank"> 01 </div>
            <div className="point"> 24673 </div>
          </div>
          {/* <!-- top id  --> */}
          <div className="top__item">
            <div className="top__item__name">
              <img src={dp} alt="" />
              <div>
                <p className="name">Shamiul Shopnil</p>
                <p className="username">Shopnil16</p>
              </div>
            </div>
            <div className="rank"> 01 </div>
            <div className="point"> 20693 </div>
          </div>
          {/* <!-- top id  --> */}
          <div className="top__item">
            <div className="top__item__name">
              <img src={dp} alt="" />
              <div>
                <p className="name">Shamiul Shopnil</p>
                <p className="username">Shopnil16</p>
              </div>
            </div>
            <div className="rank"> 03 </div>
            <div className="point"> 18668 </div>
          </div>
          <a className="seemore" href="/#">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideLeaderBoard;
