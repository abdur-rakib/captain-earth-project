import React from "react";
import { Link } from "react-router-dom";
import ehero from "../../../styles/img/ehero.jpg";

const Footer = () => {
  return (
    <div className="footer__logo-box u-center-text">
      <picture className="footer__logo">
        <source />
        <img
          alt="Full logo"
          src={ehero}
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
        />

        <p className="u-center-text">
          <Link to="/" className="footer__link">
            {" "}
            Captain Earth{" "}
          </Link>
        </p>
      </picture>
    </div>
  );
};

export default Footer;
