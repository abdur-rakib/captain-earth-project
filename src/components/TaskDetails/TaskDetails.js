import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Header from "./Header/Header";
import { connect } from "react-redux";
import { db } from "../../firebase/util";
import Footer from "../LeaderBoard/Footer/Footer";
import love1 from "../../styles/img/love1.jpg";
import love2 from "../../styles/img/love2.jpg";

const formattedTaskCategory = (taskCat) => {
  switch (taskCat) {
    case "actsOfLove":
      return "ACTS OF LOVE";
    case "goodWill":
      return "GOOD WILL";
    case "leadership":
      return "LEADERSHIP";
    default:
      return;
  }
};

const categoryColor = (taskCat) => {
  switch (taskCat) {
    case "actsOfLove":
      return "heading-primary--task_aol";
    case "goodWill":
      return "heading-primary--task_gw";
    case "leadership":
      return "heading-primary--task_lead";
    default:
      return;
  }
};

const TaskDetails = ({ user, history }) => {
  const { taskRef } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    db.doc(`/tasks/${taskRef}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setTask(doc.data());
        }
      });
  }, [taskRef]);
  console.log(task);

  return (
    <>
      <Navigation />
      <Header
        categoryColor={categoryColor(task?.category)}
        category={formattedTaskCategory(task?.category)}
      />
      <section className="section-task">
        <div className="row">
          <div className="col-2-of-3">
            <div className="u-margin-bottom-big">
              <h3 className="heading-secondary">
                {task?.title}
                <br />
                <b>Points : {task?.points}</b>
              </h3>
            </div>

            <p className="popup__task">{task?.body}</p>

            <form>
              <div className="form-group u-margin-bottom-big popup__task">
                <b>
                  {" "}
                  <label htmlFor="exampleFormControlFile1 ">
                    Add your image here :{" "}
                  </label>{" "}
                </b>
                <input
                  type="file"
                  className="form-control-file popup__task"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>

            <a href="index.html" className="btn btn--green">
              Submit
            </a>
          </div>

          <div className="col-1-of-3">
            <div className="composition">
              <img
                alt="Photo_1"
                className="composition__photo composition__photo--p1"
                src={love1}
              />

              <img
                alt="Photo_3"
                className="composition__photo composition__photo--p3"
                src={love2}
              />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(TaskDetails);
