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
      <section className="index__identity" id="identity">
        <div className="index__identity-left">
          <div className="big__heading-left">
            <h4 className="big__heading-vertical"><span>#</span>Identity</h4>
            <div className="big__heading-horijontal">
              <h1>A real life</h1>
              <h2>task based Gaming platform</h2>
            </div>
          </div>
          <div className="index__identity-text">
            <p>
              Our aim is to clear the delusion of mass people, make more empathetic and kind towards each
              other during this pandemic.
              Create awareness in masking up and enthusiasm to follow the rules of social distancing.
            </p>
          </div>
        </div>
        <div className="index__identity-right">
          <img src={wow} alt="" className="one" id="identityImage" />
          <img src={desh} alt="" className="two" id="identityImage" />
          <img src={picci} alt="" className="three" id="identityImage" />
        </div>
      </section>
      <AboutUs />
      <Quotes />
    </React.Fragment>
  );
};

export default Motives;
