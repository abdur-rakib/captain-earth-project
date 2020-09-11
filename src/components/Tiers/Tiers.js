import React from "react";
import SingleTier from "./SingleTier";
import { useEffect } from "react";
import { connect } from "react-redux";
import { levels } from "../../utils/data/userInfo";

const Tiers = ({ user }) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <section className="section-features">
      <div className="row">
        {levels.map((level) => (
          <SingleTier key={level.ref} level={level} />
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
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Tiers);
