import React from "react";
import ehero from "../../../styles/img/ehero.jpg";
import { Link } from "react-router-dom";

const Header = ({ category, categoryColor }) => {
  return (
    <header className="taskheader__aol">
      <div className="header__logo-box">
        <Link to="/">
          <img src={ehero} alt="Logo" className="header__logo" />
        </Link>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className={categoryColor}>{category}</span>
          {/* <span className="heading-primary--sub_task">
            Compete your way to become the <br />
            LEGEND
          </span> */}
        </h1>
      </div>
    </header>
  );
};

export default Header;
