import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/LeaderBoard/Header/Header";
import Results from "../components/LeaderBoard/Results/Results";
import Footer from "../components/LeaderBoard/Footer/Footer";

const LeaderBoard = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Results />
      <Footer />
    </div>
  );
};

export default LeaderBoard;
