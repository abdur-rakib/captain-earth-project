import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Header from "./Header/Header";
import { connect } from "react-redux";
import { db } from "../../firebase/util";
import Footer from "../LeaderBoard/Footer/Footer";
import love1 from "../../styles/img/love1.jpg";
import love2 from "../../styles/img/love2.jpg";
import { storage } from "../../firebase/util";
import {
  createCurrentTaskAnswer,
  getTasks,
} from "../../redux/actions/dataAction";

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

const TaskDetails = ({ user, getTasks, createCurrentTaskAnswer }) => {
  const { taskRef } = useParams();
  const [task, setTask] = useState(null);

  // Task submit related
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    console.log(file, caption);
    setError(null);
    e.preventDefault();
    if (file && caption.trim().length !== 0) {
      createCurrentTaskAnswer(url, caption);
    } else {
      setError("Type all fields");
    }
  };

  const handleVideoChange = (e) => {
    setError(null);
    let selected = e.target.files[0];
    const types = ["video/mp4", "video/x-matroska"];
    if (selected && types.includes(selected.type)) {
      setFile(selected);

      // Storage //
      const storageRef = storage.ref(
        `${user.credentials?.userName}/${task?.category}/${e.target.files[0].name}`
      );
      storageRef.put(e.target.files[0]).on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        () => {
          storageRef.getDownloadURL().then((url) => {
            setUrl(url);
            // setFile(null);
            setDisabled(false);
          });
        }
      );

      // Storage //
    } else {
      // setFile(null);
      setError("Please select a video file");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    db.doc(`/tasks/${taskRef}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setTask(doc.data());
        }
      });
    if (user.userLevel) {
      getTasks(user.userLevel);
    }
    // eslint-disable-next-line
  }, [taskRef, user]);
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
              <div className="form-group popup__task">
                <b>
                  {" "}
                  <label htmlFor="exampleFormControlFile1 ">
                    Add your caption :{" "}
                  </label>{" "}
                </b>
                <textarea
                  className="form-control-file popup__task"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group u-margin-bottom-big popup__task">
                <b>
                  {" "}
                  <label htmlFor="exampleFormControlFile1 ">
                    Add your video as proof of your work :{" "}
                  </label>{" "}
                </b>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                  type="file"
                  className="form-control-file popup__task"
                  onChange={handleVideoChange}
                />
              </div>
              {progress !== 0 && progress !== 100 && (
                <div style={{ fontSize: "20px" }}>
                  <label htmlFor="file">Uploading progress:</label>
                  <progress id="file" value={progress} max="100">
                    {" "}
                    {progress}%{" "}
                  </progress>
                </div>
              )}
            </form>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn--green"
              disabled={disabled}
            >
              Submit
            </button>
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
const mapActionsToProps = {
  createCurrentTaskAnswer,
  getTasks,
};

export default connect(mapStateToProps, mapActionsToProps)(TaskDetails);
