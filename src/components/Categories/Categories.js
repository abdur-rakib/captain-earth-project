import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import SingleCategory from "./SingleCategory";
import { db } from "../../firebase/util";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    db.collection("Categories")
      .orderBy("ref", "asc")
      .onSnapshot((snapshot) => {
        setCategories(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);
  return (
    <section className="section-tours index__categories" id="section-tours">
      <div className="big__heading-left">
        <div className="big__heading-vertical">
          <h4><span>#</span>Categories</h4>
        </div>
        <div className="big__heading-horijontal">
          <h1>Three tasks</h1>
          <h2>for being a captain earth</h2>
        </div>
      </div>

      <div className="row" style={{marginTop: "90px"}}>
        {categories?.map((category) => (
          <div key={category.ref} className="col-1-of-3">
            <SingleCategory category={category} />
          </div>
        ))}
      </div>

      <div className="u-center-text u-margin-top-huge">
        {/* <Link to="/login" className="btn btn--green">
          Adventure Awaits
        </Link> */}
      </div>
    </section>
  );
};

export default Categories;
