import React, { useState } from "react";
import SingleTier from "./SingleLevel";
import { useEffect } from "react";
import { connect } from "react-redux";
import { db } from "../../firebase/util";

const Tiers = ({ user }) => {
  const [levels, setLevels] = useState(null);

  useEffect(() => {
    db.collection("UserLevels")
      .orderBy("ref", "asc")
      .onSnapshot((snapshot) => {
        setLevels(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);
  return (
    <section className="section-features">
      <div className="row">
        {levels?.map((level) => (
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
