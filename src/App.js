import React, { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./components/Login/Login";
import { auth } from "./firebase/util";
import { SET_AUTHENTICATED, SET_USER } from "./redux/types";
import store from "../src/redux/store";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        store.dispatch({ type: SET_AUTHENTICATED });
        store.dispatch({
          type: SET_USER,
          payload: {
            uid: userAuth.uid,
            userName: userAuth.displayName,
            userImage: userAuth.photoURL,
            email: userAuth.email,
          },
        });
      }
    });
  });
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/leaderboard" component={LeaderBoard} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
