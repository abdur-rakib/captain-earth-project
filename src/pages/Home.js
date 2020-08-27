import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Motives from "../components/Motives/Motives";
import Tiers from "../components/Tiers/Tiers";
import Categories from "../components/Categories/Categories";
// import Speeches from "../components/Speeches/Speeches";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { getTasks } from "../redux/actions/dataAction";

const Home = ({ user, getTasks }) => {
  const { credentials } = user;
  useEffect(() => {
    if (credentials) {
      getTasks(credentials.userLevel);
    }
    // eslint-disable-next-line
  }, [credentials]);
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Motives />
        <Tiers />
        <Categories />
        {/* <Speeches /> */}
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};
const mapActionsToProps = { getTasks };

export default connect(mapStateToProps, mapActionsToProps)(Home);
