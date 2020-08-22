import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Motives from "../components/Motives/Motives";
import Tiers from "../components/Tiers/Tiers";
import Categories from "../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Motives />
        <Tiers />
        <Categories />
      </main>
    </div>
  );
};

export default Home;
