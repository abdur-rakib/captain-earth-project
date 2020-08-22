import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Motives from "../components/Motives/Motives";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Motives />
      </main>
    </div>
  );
};

export default Home;
