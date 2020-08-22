import React, { useEffect } from "react";
import "./Login.css";
import { connect } from "react-redux";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../redux/actions/userAction";

const Login = ({ user, signInWithFacebook, signInWithGoogle, history }) => {
  useEffect(() => {
    if (user.authenticated) {
      history.push("/");
    }
  });
  return (
    <div className="login">
      <button onClick={signInWithFacebook} className="btn">
        Login with Facebook
      </button>
      <button onClick={signInWithGoogle} className="btn">
        Login with Google
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  signInWithFacebook,
  signInWithGoogle,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
