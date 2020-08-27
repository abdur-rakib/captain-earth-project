import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import maskot from "../../styles/img/maskot.png";
import Footer from "../Footer/Footer";
import Feed from "./Feed";
import { connect } from "react-redux";
import { getAnswers } from "../../redux/actions/dataAction";

const NewsFeed = ({ getAnswers }) => {
  useEffect(() => {
    getAnswers();
  }, [getAnswers]);
  return (
    <div>
      <Navigation />
      {/* Header Section */}
      <header className="newsfeed">
        <div className="newsfeed__logo-box">
          <img src={maskot} alt="Logo" className="newsfeed__logo" />
        </div>
      </header>
      {/* End of Header section */}
      <Feed />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {
  getAnswers,
};

export default connect(mapStateToProps, mapActionsToProps)(NewsFeed);
