import React from "react";

const TaskProgress = () => {
  return (
    <main>
      <section className="section-tours" id="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">TASK Progress</h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading_level">
                  <span className="card__heading_level-span card__heading_level-span--1">
                    Level
                  </span>
                </h4>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    ACTS OF LOVE
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>15 Task</li>
                    <li>Practice Kindness</li>
                    <li>Be a spark of hope</li>
                    <li>Enhance emotional well-being</li>
                    <li>
                      Difficulty: <b>EASY</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">15 TASKS!</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading_level">
                  <span className="card__heading_level-span card__heading_level-span--2">
                    Level
                  </span>
                </h4>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    GOOD WILL
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>15 Tasks</li>
                    <li>Become happier</li>
                    <li>Elevate self-esteem</li>
                    <li>Fewer negative emotions</li>
                    <li>
                      Difficulty: <b>MEDIUM</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">15 TASKS!</p>
                  </div>
                  <a href="#popup1" className="btn btn--white">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading_level">
                  <span className="card__heading_level-span card__heading_level-span--3">
                    Level
                  </span>
                </h4>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    LEADERSHIP
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>15 Tasks</li>
                    <li>Maximize efficiency</li>
                    <li>Achive organisational goals</li>
                    <li>Build alliances via networking</li>
                    <li>
                      Difficulty: <b>HARD</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">15 TASKS!</p>
                  </div>
                  <a href="#popup2" className="btn btn--white">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn btn--green">
            Adventure Awaits!
          </a>
        </div>
      </section>
    </main>
  );
};

export default TaskProgress;
