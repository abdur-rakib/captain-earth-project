import React from "react";

const Results = () => {
  return (
    <section className="section-task">
      <center>
        <h3 className="heading-secondary">LEGEND LEAGUE</h3>
      </center>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <table className="table-latitude">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>
                    <span className="label label-primary">1st</span>
                  </th>

                  <td>
                    <a href="#popup00" className="btn-text">
                      Risal Shahriar Shefin
                    </a>
                  </td>

                  <td>5500</td>
                </tr>
                <tr>
                  <th>
                    <span className="label label-success">2nd</span>
                  </th>
                  <td>
                    <a href="#popup01" className="btn-text">
                      Jahnnobi Rahman
                    </a>
                  </td>
                  <td>5000</td>
                </tr>
                <tr>
                  <th>
                    <span className="label label-info">3rd</span>
                  </th>
                  <td>
                    <a href="/" className="btn-text">
                      Naimul Hauqe Joy
                    </a>
                  </td>
                  <td>4500</td>
                </tr>
                <tr>
                  <th>
                    <span className="label label-warning">4th</span>
                  </th>
                  <td>
                    <a href="/" className="btn-text">
                      Nikhat Rejoana
                    </a>
                  </td>
                  <td>4000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <center>
        {/* <marquee behavior="alternate" direction="left"> */}
        <h3 className="heading-tertiary">
          Diamond Achiever of the week : Risal Shahriar Shefin
        </h3>
        {/* </marquee> */}
      </center>

      {/* <!-- board start --> */}
      <center>
        <h3 className="heading-secondary">EXCEPTIONAL LEAGUE</h3>
      </center>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <table className="table-latitude">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>01</th>
                  <td>Dhruba Mitra</td>
                  <td>3500</td>
                </tr>
                <tr>
                  <th>02</th>
                  <td>Tauhidul Islam Tanu</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <th>03</th>
                  <td>MD Rakibul Islam</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <th>04</th>
                  <td>Sadman Sakib</td>
                  <td>2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <center>
        {/* <marquee behavior="alternate" direction="right"> */}
        <h3 className="heading-tertiary">
          Golden Achiever of the week : Tauhidul islam Tanu
        </h3>
        {/* </marquee> */}
      </center>

      {/* <!-- board start --> */}
      <center>
        <h3 className="heading-secondary">FASCINATING LEAGUE</h3>
      </center>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <table className="table-latitude">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>01</th>
                  <td>Dibba Barua</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <th>02</th>
                  <td>Barik Sadik</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <th>03</th>
                  <td>Abid mahmud</td>
                  <td>500</td>
                </tr>
                <tr>
                  <th>04</th>
                  <td>Shafeen Ahmed</td>
                  <td>450</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <center>
        {/* <marquee behavior="alternate" direction="left"> */}
        <h3 className="heading-tertiary">
          Silver Achiever of the week : Dibba Barua
        </h3>
        {/* </marquee> */}
      </center>

      <center>
        <h3 className="heading-secondary">COMMONER LEAGUE</h3>
      </center>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <table className="table-latitude">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>01</th>
                  <td>Ayana Rose</td>
                  <td>400</td>
                </tr>
                <tr>
                  <th>02</th>
                  <td>Tadmira Sharlin</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th>03</th>
                  <td>Farhana Rahman Tany</td>
                  <td>250</td>
                </tr>
                <tr>
                  <th>04</th>
                  <td>Hanjala Hossain</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <center>
        {/* <marquee behavior="alternate" direction="right"> */}
        <h3 className="heading-tertiary">
          Bronze Achiever of the week : Ayana Rose
        </h3>
        {/* </marquee> */}
      </center>

      <div className="popup" id="popup00">
        <div className="row">
          <div className="col-1-of-3">
            <h3 className="heading-secondary_white ">
              Rank: 01
              <br />
            </h3>
            <h3 className="heading-secondary_white">
              Name : Risal Shahriar Shefin
              <br />
            </h3>
            <h3 className="heading-secondary_white">
              Points : 5500
              <br />
            </h3>
          </div>
          <div className="col-2-of-3">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <center>
              <h3 className="heading-secondary_white">Current Progress</h3>
            </center>

            <div className="box">
              <div className="arrow"></div>
              <div className="num-bar">
                <div className="num-bar-10"></div>
                <div className="num-bar-20"></div>
                <div className="num-bar-30"></div>
                <div className="num-bar-40"></div>
                <div className="num-bar-50"></div>
                <div className="num-bar-60"></div>
                <div className="num-bar-70"></div>
                <div className="num-bar-80"></div>
                <div className="num-bar-90"></div>
                <div className="num-bar-100"></div>
              </div>

              <div className="graph-1">
                <h3 className="heading-tertiary_lead u-center-text">
                  Leadership
                </h3>
              </div>
              <div className="graph-3">
                <h2 className="heading-tertiary_lead u-center-text">
                  Goodwill
                </h2>
              </div>
              <div className="graph-4">
                <h3 className="heading-tertiary_lead u-center-text">
                  Acts of love
                </h3>
              </div>

              <div className="line-0"></div>

              <div className="line-30"></div>

              <div className="line-80"></div>
              <div className="line-100"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- pop up end--> */}

      {/* <!-- pop up start--> */}
      <div className="popup" id="popup01">
        <div className="row">
          <div className="col-1-of-3">
            <h3 className="heading-secondary_white">
              Rank: 02
              <br />
            </h3>
            <h3 className="heading-secondary_white">
              Name : Jahnnobi Rahman
              <br />
            </h3>
            <h3 className="heading-secondary_white">
              Points : 5000
              <br />
            </h3>
          </div>
          <div className="col-2-of-3">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <center>
              <h3 className="heading-secondary_white">Current Progress</h3>
            </center>

            <div className="box">
              <div className="arrow">
                {/* </div> <!-- end of arrow --> */}
                <div className="num-bar">
                  <div className="num-bar-10"></div>
                  <div className="num-bar-20"></div>
                  <div className="num-bar-30"></div>
                  <div className="num-bar-40"></div>
                  <div className="num-bar-50"></div>
                  <div className="num-bar-60"></div>
                  <div className="num-bar-70"></div>
                  <div className="num-bar-80"></div>
                  <div className="num-bar-90"></div>
                  <div className="num-bar-100"></div>
                </div>
                {/* <!-- end of num-bar --> */}

                <div className="graph-1">
                  <h3 className="heading-tertiary_lead u-center-text">
                    Leadership
                  </h3>
                </div>
                <div className="graph-3">
                  <h2 className="heading-tertiary_lead u-center-text">
                    Goodwill
                  </h2>
                </div>
                <div className="graph-4">
                  <h3 className="heading-tertiary_lead u-center-text">
                    Acts of love
                  </h3>
                </div>

                <div className="line-0"></div>

                <div className="line-30"></div>

                <div className="line-80"></div>
                <div className="line-100"></div>
              </div>
              {/* <!-- End  Box --> */}
            </div>
          </div>
        </div>
        {/* <!-- pop up end--> */}
      </div>
    </section>
  );
};

export default Results;
