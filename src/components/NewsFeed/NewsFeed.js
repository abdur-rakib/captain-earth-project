import React from "react";
import Navigation from "../Navigation/Navigation";
import maskot from "../../styles/img/maskot.png";
import Footer from "../Footer/Footer";
import Feed from "./Feed";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NewsFeed = ({ user: { authenticated }, history }) => {
  // useEffect(() => {
  //   if (!authenticated) {
  //     history.push("/login");
  //   }
  // });
  return (
    <div>
      <Navigation />
      {/* Header Section */}
      <header className="newsfeed">
        <Link to="/" className="newsfeed__logo-box">
          <img src={maskot} alt="Logo" className="newsfeed__logo" />
        </Link>
      </header>
      {/* End of Header section */}
      <Feed />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NewsFeed);
