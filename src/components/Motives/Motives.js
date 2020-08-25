import React from "react";
import { motives } from "../../data/motives";
import SingleMotive from "./SingleMotive";

// image import
import wow from "../../styles/img/wow.jpg";
import desh from "../../styles/img/desh.jpg";
import picci from "../../styles/img/picchi.jpg";

const Motives = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Love the life you live , live the life you love<br /> Bob Marley
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          {motives.map((motive) => (
            <SingleMotive key={motive.id} motive={motive} />
          ))}

          <a href="/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              className="composition__photo composition__photo--p1"
              src={wow}
              alt="wow"
            />

            <img
              className="composition__photo composition__photo--p2"
              src={picci}
              alt="picci"
            />

            <img
              className="composition__photo composition__photo--p3"
              src={desh}
              alt="desh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motives;
