import React from "react";
import Typography from "../../styles/img/Typography.png";
import maskot from "../../styles/img/maskot.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to="/">
          <img src={maskot} alt="Logo" className="header__logo" />
        </Link>
      </div>

      <div className="header__text-box">
      <div class="profile__pic-box">
                    <img src={Typography} alt="" class="profile__main" />
                </div>

        <a href="#section-book" className="btn btn--white btn--animated">
          start exploring
        </a>
      </div>
    </header>
  );
};

export default Header;
