import React from "react";
import maskot from "../../../styles/img/maskot.png";

const Header = () => {
  return (
    <header class="profile">
      <div class="profile__logo-box">
        <img src={maskot} alt="Logo" class="profile__logo" />
      </div>
      <div class="profile__pic-box">
        <img src="img/dp.jpg" alt="" class="profile__pic" />
      </div>

      <div class="profile__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--profile">Shamiul shopnil</span>
          <span class="heading-primary--profilesub">LEGEND</span>
        </h1>

        <h2 class="heading-primary--profile">4400 points</h2>
      </div>
    </header>
  );
};

export default Header;
