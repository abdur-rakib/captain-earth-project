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
            <div className="icon"><Link to="/"><i className="fab fa-instagram"></i></Link></div>
            <div className="icon"><Link to="/"><i className="fab fa-facebook-f"></i></Link></div>
            <div className="text">Follow us on</div>
        </div>
    </header>
  );
};

export default Header;
