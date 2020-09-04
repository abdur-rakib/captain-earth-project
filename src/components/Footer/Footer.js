import React from "react";
import Emblem from "../../styles/img/Emblem.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source srcSet={Emblem} media="(max-width: 37.5em)" />
          <img
            srcSet={Emblem}
            alt="Full logo"
            className="footer__logo"
            src={Emblem}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  Company
                </Link>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Contact us
                </a>
              </li>

              <li className="footer__item">
                <Link to="/rules" className="footer__link">
                  Rules
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="/" className="footer__link">
              {" "}
              Team Blue Bug{" "}
            </a>{" "}
            a work in progess website for the game{" "}
            <a href="/" className="footer__link">
              Captain Earth{" "}
            </a>
            . Copyright &copy; by Team Blue Bug
            <br /> Captain Earth is a digital gaming platform designed with
            tasks & psycological tests to make players more humane & empathetic
            for the betterment of the society.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
