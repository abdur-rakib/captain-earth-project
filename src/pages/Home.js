import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Motives from "../components/Motives/Motives";
import Tiers from "../components/Tiers/Tiers";
import Categories from "../components/Categories/Categories";
import Speeches from "../components/Speeches/Speeches";
import JoinUs from "../components/JoinUs/JoinUs";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Motives />
        <Tiers />
        <Categories />
        <Speeches />
        <JoinUs />
      </main>
    </div>
  );
};

export default Home;
