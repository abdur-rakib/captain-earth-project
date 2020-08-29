import { db } from "../../firebase/util";
import { SET_TASKS, SET_LEVELS, SET_ANSWERS } from "../types";

// get levels
export const getLevels = () => (dispatch) => {
  db.collection("UserLevels").onSnapshot((querySnapshot) => {
    let levels = [];
    querySnapshot.docs.map((doc) => levels.push({ ...doc.data(), id: doc.id }));
    dispatch({ type: SET_LEVELS, payload: levels });
  });
};

export const getTasks = (userLevel) => (dispatch) => {
  db.collection("tasks")
    .where("level", "==", userLevel)
    .get()
    .then((querySnapshot) => {
      let actsOfLoveTask = [];
      let goodWillTask = [];
      let leadershipTask = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().category === "actsOfLove") {
          actsOfLoveTask.push(doc.data());
        } else if (doc.data().category === "goodWill") {
          goodWillTask.push(doc.data());
        } else if (doc.data().category === "leadership") {
          leadershipTask.push(doc.data());
        }
      });
      dispatch({
        type: SET_TASKS,
        payload: { actsOfLoveTask, goodWillTask, leadershipTask },
      });
    });
};

// create current task
export const createCurrentTaskAnswer = (
  url,
  body,
  userImage,
  userName,
  taskRef,
  history
) => (dispatch) => {
  db.collection("answers")
    .add({
      url,
      userImage,
      body,
      userName,
      taskRef,
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
      createdAt: new Date().toISOString(),
    })
    .then(() => {
      history.push("/newsfeed");
    })
    .catch((err) => console.log(err));
};

// get all answers
export const getAnswers = () => (dispatch) => {
  db.collection("answers")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
      let answers = [];
      // eslint-disable-next-line
      querySnapshot.forEach((doc) => {
        // let level, category;
        // db.doc(`/tasks/${doc.data().taskRef}`)
        //   .get()
        //   .then((d) => {
        //     category = d.data().category;
        //     level = d.data().level;
        //     answers.push({ ...doc.data(), level, category, ref: doc.id });
        //   });
        answers.push({ ...doc.data(), ref: doc.id });
      });
      // console.log(answers);
      dispatch({ type: SET_ANSWERS, payload: answers });
    });
};

// Like post
export const likeAnswer = (answerRef, userName) => (dispatch) => {
  console.log(answerRef, userName);
};

// is this answer liked by the user
export const likedAnswer = () => (dispatch) => {
  console.log("Test action");
};

// helper function
