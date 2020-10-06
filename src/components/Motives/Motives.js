import React from "react";
import { motives } from "../../utils/data/motives";
import AboutUs from "./AboutUs";

// image import
import wow from "../../styles/img/wow.jpg";
import desh from "../../styles/img/desh.jpg";
import picci from "../../styles/img/picchi.jpg";
import Quotes from "./Quotes";

const Motives = () => {
  return (
    <React.Fragment>
      <section class="index__identity" id="identity">
        <div class="index__identity-left">
          <div class="big__heading-left">
            <h4 class="big__heading-vertical"><span>#</span>Identity</h4>
            <div class="big__heading-horijontal">
              <h1>A real life</h1>
              <h2>task based Gaming platform</h2>
            </div>
          </div>
          <div class="index__identity-text">
            <p>
              Our aim is to clear the delusion of mass people, make more empathetic and kind towards each
              other during this pandemic.
              Create awareness in masking up and enthusiasm to follow the rules of social distancing.
            </p>
          </div>
        </div>
        <div class="index__identity-right">
          <img src={wow} alt="" class="one" id="identityImage" />
          <img src={desh} alt="" class="two" id="identityImage" />
          <img src={picci} alt="" class="three" id="identityImage" />
        </div>
      </section>
      <AboutUs />
      <Quotes />
    </React.Fragment>
  );
};

export default Motives;
