import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { useState } from "react";
import Modal from "react-modal";
import "./SingleCategory.css";
import SingleCategoryTasks from "./SingleCategoryTasks";
import getCategoryImage from "../../utils/data/categories";

Modal.defaultStyles.overlay.backgroundColor = "lightGray";

const SingleCategory = ({ category, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
      >
        <div className="ModalBody">
          <SingleCategoryTasks close={handleClose} category={category} />
        </div>
      </Modal>

      <div className="card">
        <div className="card__side card__side--front">
          <h4 className={`card__heading card__heading--${category.ref + 1}`}>
            <span className="card__heading-span card__heading-span--1">
              <img src={getCategoryImage(category.ref)} alt="category_image" />
              <div className="card__heading__head">
                <h4>{category.title}</h4>
              </div>
            </span>
          </h4>
          <div className="card__details">
            <ul>
              {category.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`card__side card__side--back card__side--back-${
            category.ref + 1
          }`}
        >
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">15 Tasks</p>
            </div>
            {user.authenticated ? (
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn--white"
              >
                START NOW
              </button>
            ) : (
              <Link to="/login" className="btn btn--white">
                Login to join
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};

export default connect(mapStateToProps)(SingleCategory);
