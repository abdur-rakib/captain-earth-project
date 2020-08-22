import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Motives from "../components/Motives/Motives";
import Tiers from "../components/Tiers/Tiers";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Motives />
        <Tiers />
      </main>
    </div>
  );
};

export default Home;
