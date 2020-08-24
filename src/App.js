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

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setAuthenticated(true);
        store.dispatch({ type: SET_AUTHENTICATED });
        store.dispatch(getAuthenticatedUser(userAuth.uid));
      }
    });
  });
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/leaderboard" component={LeaderBoard} />
      <Route
        exact
        path="/task/:taskRef"
        render={() =>
          !authenticated ? <Redirect to="/login" /> : <TaskDetails />
        }
      />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default App;
