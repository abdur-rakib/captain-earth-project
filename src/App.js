import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./components/Login/Login";
import { auth } from "./firebase/util";
import { SET_AUTHENTICATED } from "./redux/types";
import store from "../src/redux/store";
import { getAuthenticatedUser } from "./redux/actions/userAction";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Profile from "./components/Profile/Profile";
// import AnswerDetails from "./components/NewsFeed/AnswerDetails";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        setAuthenticated(true);
        store.dispatch({ type: SET_AUTHENTICATED });
        store.dispatch(getAuthenticatedUser(userAuth.uid));
      } else {
        setAuthenticated(false);
      }
    });
  });
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/leaderboard" component={LeaderBoard} />
      {/* <Route exact path="/newsfeed" component={NewsFeed} /> */}
      <Route exact path="/user/:ref" component={Profile} />
      <Route exact path="/task/:taskRef" component={TaskDetails} />
      {/* <Route exact path="/answer/:answerRef" component={AnswerDetails} /> */}
      <Route
        exact
        path="/login"
        render={() => (authenticated ? <Redirect to="/" /> : <Login />)}
      />
      <Route
        exact
        path="/newsfeed"
        render={() =>
          !authenticated ? <Redirect to="/login" /> : <NewsFeed />
        }
      />
    </BrowserRouter>
  );
};

export default App;
