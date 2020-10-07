import React, { useState } from "react";
import SingleTier from "./SingleLevel";
import { useEffect } from "react";
import { connect } from "react-redux";
import { db } from "../../firebase/util";
import SingleLevel from "./SingleLevel";

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
    <section className="index__levels" id="levels">
      <div className="big__heading-right">
        <div className="big__heading-vertical">
          <h4><span>#</span>LEVELS</h4>
        </div>
        <div className="big__heading-horijontal">
          <h1>Diffrent</h1>
          <h2>levels of captain earth</h2>
        </div>
      </div>

      <SingleLevel />
    </section>
    // <section className="section-features">
    //   <div className="row">
    //     {levels?.map((level) => (
    //       <SingleTier key={level.ref} level={level} />
    //     ))}
    //   </div>
    // </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Tiers);
