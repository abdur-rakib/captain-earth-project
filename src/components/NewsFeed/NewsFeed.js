import React from "react";
import Navigation from "../Navigation/Navigation";
import maskot from "../../styles/img/maskot.png";
import Footer from "../Footer/Footer";
import Feed from "./Feed";

const NewsFeed = () => {
  // const [answers, setAnswers] = useState(null);

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

export default NewsFeed;
