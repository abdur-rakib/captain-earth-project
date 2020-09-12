import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { connect } from "react-redux";
import { db } from "../../firebase/util";
// eslint-disable-next-line
import Footer from "../Footer/Footer";
import { storage } from "../../firebase/util";
import { createCurrentTaskAnswer } from "../../redux/actions/dataAction";
import "./TaskDetails.css";
import getCategoryImage from "../../utils/data/categories";

import Alert from "@material-ui/lab/Alert";

const TaskDetails = ({ user, createCurrentTaskAnswer, history, data }) => {
  const { taskRef } = useParams();
  const [task, setTask] = useState(null);

  // Task submit related
  // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    if (url && body.trim().length !== 0) {
      createCurrentTaskAnswer(
        url,
        body,
        user.credentials.userImage,
        user.credentials.userName,
        task.ref,
        user.credentials.ref,
        task.user_category,
        task.user_level,
        history
      );
      // console.log(file, body);
    } else {
      setError("Please add all fields");
    }
  };

  const handleVideoChange = (e) => {
    setError(null);
    let selected = e.target.files[0];
    const types = ["video/mp4", "video/mov", "video/x-matroska"];
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
    if (data.tasks) {
      setTask(data.tasks?.filter((task) => task.ref === taskRef)[0]);
    } else {
      db.doc(`/tasks/${taskRef}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setTask(doc.data());
          }
        });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navigation />

      <section className="gametask">
        <div
          className={`gametask__description card__heading--${
            task?.user_category + 1
          }`}
        >
          <div className="maskort_image">
            <img
              src={getCategoryImage(task?.user_category)}
              height="95%"
              alt="category_image"
            />
          </div>
          <div className="gametask__description__details">
            <div>
              <h1>{task?.title}</h1>
              <p>{task?.body}</p>
            </div>
            <div>
              <h1>Submit your task</h1>
              {error && <Alert severity="error">{error}</Alert>}
              <form onSubmit={handleSubmit}>
                <textarea
                  placeholder="Add Caption"
                  name=""
                  rows="3"
                  width="100%"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                    setError(null);
                  }}
                ></textarea>
                {/* <p>Add video of your work (as a proof):</p> */}
                <input onChange={handleVideoChange} type="file" />
                {progress !== 0 && progress !== 100 && (
                  <progress value={progress} max={100} />
                )}
                <button
                  disabled={disabled}
                  className={`btn_complete card__heading--${
                    task?.user_category + 1
                  }`}
                  type="submit"
                >
                  Complete task
                </button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};
const mapActionsToProps = {
  createCurrentTaskAnswer,
};

export default connect(mapStateToProps, mapActionsToProps)(TaskDetails);
