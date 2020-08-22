import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/leaderboard" component={LeaderBoard} />
    </BrowserRouter>
  );
}

export default App;
