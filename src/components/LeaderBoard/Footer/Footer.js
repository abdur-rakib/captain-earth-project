import React from "react";
import Emblem from "../../../styles/img/Emblem.png";

const Footer = () => {
  return (
    <div className="footer__logo-box u-center-text">
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
  );
};

export default Footer;
