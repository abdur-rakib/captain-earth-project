import React from "react";
import { Link } from "react-router-dom";
import maskot from '../../styles/img/maskot.png'

const Header = (props) => {
  return (
    <header className="index__header">
      <div className="index__header-image">
        <img src={maskot} alt="indexLogo" />
      </div>
      <div className="index__header-social">
        <div className="icon">
          <a target='_blank' href="https://www.instagram.com/captain_earth__bethechange/?hl=en">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="icon">
          <a target='_blank' href="https://www.facebook.com/InterractiveGame">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="text">Follow us on</div>
      </div>
    </header>
  );
};

export default Header;
