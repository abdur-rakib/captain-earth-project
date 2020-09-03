import React from "react";

import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
import SingleCategory from "./SingleCategory";
import { categories } from "../../utils/data/userInfo";

const Categories = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">TASK CATEGORIES</h2>
      </div>

      <div className="row">
        {categories.map((category) => (
          <div key={category.ref} className="col-1-of-3">
            <SingleCategory category={category} />
          </div>
        ))}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Link to="/" className="btn btn--green">
          Adventure Awaits
        </Link>
      </div>
    </section>
  );
};

export default Categories;
