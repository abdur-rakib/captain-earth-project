import React from "react";
import ehero from "../../styles/img/ehero.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source />
          <img
            alt="ehero"
            src={ehero}
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%",
            }}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Terms
                </a>
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
