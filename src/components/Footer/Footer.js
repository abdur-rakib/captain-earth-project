import React from "react";
import Emblem from "../../styles/img/Emblem.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="footer">
        <div class="footer__left">
          <img src={Emblem} alt="" width="100px" />
          <div class="text">
            <p> Captain Earth is a competitive platform to inspire and facilitate humane behaviour and grow positive mentality in young generation. <span>Learn more</span></p>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__social-links">
            <div class="icon"><Link to="/"><i class="fab fa-instagram"></i></Link></div>
            <div class="icon"><Link to="/"><i class="fab fa-facebook-f"></i></Link></div>
            <div class="icon"><Link to="/"><i class="fab fa-twitter"></i></Link></div>
          </div>
          <div class="footer__links">
            <Link to="/">About</Link>
            <Link to="/privacy">Privacy & Policy</Link>
            <Link to="/rules">Game Rules</Link>
            <Link to="/">Contact us</Link>
          </div>
          <div class="text">
            <p>Built by <span>team blue bug</span>, website for the game Captain Earth</p>
            <p><span>©</span> Copyright by Team Blue Bug</p>
          </div>
        </div>
      </footer>
      <div class="finish"></div>
    </React.Fragment>
  );
};

export default Footer;
