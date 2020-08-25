import React from "react";
import ehero from "../../styles/img/ehero.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to="/">
          <img src={ehero} alt="Logo" className="header__logo" />
        </Link>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Captain Earth</span>
          <span className="heading-primary--sub">Be the change</span>
        </h1>

        <a href="#section-book" className="btn btn--white btn--animated">
          start exploring
        </a>
      </div>
    </header>
  );
};

export default Header;
