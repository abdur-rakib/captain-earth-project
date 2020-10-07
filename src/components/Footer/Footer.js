import React from "react";
import Emblem from "../../styles/img/Emblem.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__left">
          <img src={Emblem} alt="" width="100px" />
          <div className="text">
            <p> Captain Earth is a competitive platform to inspire and facilitate humane behaviour and grow positive mentality in young generation. <span>Learn more</span></p>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__social-links">
            <div className="icon"><a target='_blank' href="https://www.instagram.com/captain_earth__bethechange/?hl=en"><i className="fab fa-instagram"></i></a></div>
            <div className="icon"><a target='_blank' href="https://www.facebook.com/InterractiveGame"><i className="fab fa-facebook-f"></i></a></div>
            <div className="icon"><a target='_blank' href="https://www.linkedin.com/company/captain-earth/"><i class="fab fa-linkedin-in"></i></a></div>
          </div>
          <div className="footer__links">
            <Link to="/">About</Link>
            <Link to="/privacy">Privacy & Policy</Link>
            <Link to="/rules">Game Rules</Link>
            <Link to="/">Contact us</Link>
          </div>
          <div className="text">
            <p>Built by <span>team blue bug</span>, website for the game Captain Earth</p>
            <p><span>©</span> Copyright by Team Blue Bug</p>
          </div>
        </div>
      </footer>
      <div className="finish"></div>
    </React.Fragment>
  );
};

export default Footer;
