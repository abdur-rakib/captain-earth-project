import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../redux/actions/userAction";
import Footer from "../Footer/Footer";

import maskot from "../../styles/img/maskot.png";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Login = ({
  signInWithFacebook,
  signInWithGoogle,
  UI,
  location,
  authenticated,
}) => {
  console.log(UI.error?.message);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const referer = location.state?.referer || "/";
  if (authenticated) {
    return <Redirect to={referer} />;
  }
  return (
    <>
      <Navigation />
      <div className="login__container">
        <div className="login__container__logoBox">
          <img src={maskot} height="70%" alt="loginimage" />
        </div>
        <div className="login__container__items">
          <div className="login__options">
            <h1 className="heading-secondary">Join with us</h1>
            <p>
              Captain Earth a competitive platform to inspire and facilitate
              humane behaviour and grow positive mentality in young generation.
            </p>
            <div className="login__options__option facebook">
              <h1 onClick={signInWithFacebook}>
                {" "}
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>{" "}
                Login with Facebook{" "}
              </h1>
            </div>
            <div className="login__options__option google">
              <h1 onClick={signInWithGoogle}>
                {" "}
                <span>
                  <i className="fab fa-google"></i>
                </span>{" "}
                Login with Google{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    UI: state.UI,
  };
};
const mapActionsToProps = {
  signInWithFacebook,
  signInWithGoogle,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
