import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(AuthRoute);
