import React from "react";
import nat8 from "../../styles/img/nat-8.jpg";
import nat9 from "../../styles/img/nat-9.jpg";
import video1 from "../../styles/img/video.mp4";

const Speeches = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Together we make the world a better place
        </h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Nelson Mandela</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">GIFT!</h3>
            <p>
              "There can be no greater gift than that of giving one's time and
              energy to help others without expecting anything in return"
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mother Teresa</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              PROBLEMS!
            </h3>
            <p>
              "Don't worry about problems exist in the world- <br />
              Just respond to peoples needs"
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Speeches;
