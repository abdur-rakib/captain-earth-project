import React from "react";
import { tiers } from "../../data/tiers";
import SingleTier from "./SingleTier";

const Tiers = () => {
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

export default Tiers;
