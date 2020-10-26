import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./components/Login/Login";
import { auth } from "./firebase/util";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "./redux/types";
import store from "../src/redux/store";
import { getAuthenticatedUser, getUsers } from "./redux/actions/userAction";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Profile from "./components/Profile/Profile";
import AnswerDetails from "./components/NewsFeed/AnswerDetails";
import Admin from "./components/Admin/Admin";
import Rules from "./components/Rules/Rules";
import { getAnswers } from "./redux/actions/dataAction";

// Auth is loaded
import AuthRoute from "./utils/AuthRoute";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Auth from "./components/Login/Auth";

// function AuthIsLoaded({ children }) {
//   const myAuth = useSelector((state) => state.user.credentials);
//   if (myAuth) {
//     return children;
//   } else {
//     return (
//       <div>
//         <Spinner />
//       </div>
//     );
//   }
// }

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        setAuthenticated(true);
        store.dispatch({ type: SET_AUTHENTICATED });
        store.dispatch(getAuthenticatedUser(userAuth.uid));
        store.dispatch(getUsers());
        store.dispatch(getAnswers());
      } else {
        setAuthenticated(false);
        store.dispatch({ type: SET_UNAUTHENTICATED });
      }
    });
  }, []);
  console.log(authenticated);
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/leaderboard" component={LeaderBoard} />
      {/* <Route exact path="/user/:ref" component={Profile} /> */}
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/rules" component={Rules} />
      <Route exact path="/privacy" component={PrivacyPolicy} />
      <Route exact path="/task/:taskRef" component={TaskDetails} />
      <AuthRoute exact path="/answer/:answerRef" component={AnswerDetails} />
      {/* <Route
        exact
        path="/login"
        render={() => (authenticated ? <Redirect to="/" /> : <Login />)}
      /> */}
      {/* <AuthIsLoaded>
        <Route exact path="/newsfeed" component={NewsFeed} />
      </AuthIsLoaded> */}
      <AuthRoute exact path="/newsfeed" component={NewsFeed} />
      <AuthRoute exact path="/user/:ref" component={Profile} />
      <Route exact path="/login" component={Auth} />
    </BrowserRouter>
  );
};

export default App;
