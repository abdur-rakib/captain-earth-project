import React from "react";
import ehero from "../../../styles/img/ehero.jpg";

const Header = ({ category }) => {
  return (
    <header className="taskheader__aol">
      <div className="header__logo-box">
        <img src={ehero} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--task_aol">{category}</span>
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
