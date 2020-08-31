import React from "react";
import { tiers } from "../../data/tiers";
import SingleTier from "./SingleTier";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthenticatedUser } from "../../redux/actions/userAction";

const Tiers = ({ getAuthenticatedUser, user }) => {
  useEffect(() => {
    getAuthenticatedUser(user.credentials?.ref);
    // eslint-disable-next-line
  }, []);
  return (
    <section className="section-features">
      <div className="row">
        {tiers.map((tier) => (
          <SingleTier key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  getAuthenticatedUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Tiers);
