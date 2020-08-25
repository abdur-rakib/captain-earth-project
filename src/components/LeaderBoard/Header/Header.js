import React from "react";
import maskot from "../../../styles/img/maskot.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="taskheader__aol">
      <div className="header__logo-box">
        <Link to="/">
          <img src={maskot} alt="Logo" className="header__logo" />
        </Link>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--task_lb">LEADER BOARD</span>
          <span className="heading-primary--sub_task">
            Compete your way to become the <br />
            LEGEND
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
