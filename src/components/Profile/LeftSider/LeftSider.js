import React from "react";

const LeftSider = () => {
  return (
    <div>
      <div className="feed__leftsidebar__upper">
        <div className="sidelink">
          <div className="sidelink__icon">
            <i className="fas fa-home"></i>
          </div>
          <div className="sidelink__name">
            <a href="#">Home</a>
          </div>
        </div>
        <div className="sidelink">
          <div className="sidelink__icon">
            <i className="fas fa-circle-notch"></i>
          </div>
          <div className="sidelink__name">
            <a href="#">Dashboard</a>
          </div>
        </div>
        <div className="sidelink">
          <div className="sidelink__icon">
            <i className="fas fa-fire-alt"></i>
          </div>
          <div className="sidelink__name">
            <a href="#">Trendings</a>
          </div>
        </div>
        {/* <!-- trending items --> */}
        <ul className="trendings">
          <li className="trendings__item">Act of love</li>
          <li className="trendings__item">Good will</li>
          <li className="trendings__item">Leadership</li>
        </ul>
      </div>

      <div className="feed__leftsidebar__lower">
        <div className="sidelink">
          <div className="sidelink__icon">
            <i className="fas fa-cog"></i>
          </div>
          <div className="sidelink__name">
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSider;
