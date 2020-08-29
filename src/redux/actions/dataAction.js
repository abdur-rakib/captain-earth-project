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
      querySnapshot.docs.map((doc) => {
        let category;
        let level;
        db.doc(`/tasks/${doc.data().taskRef}`)
          .get()
          .then((doc) => {
            if (doc.exists) {
              category = doc.data().category;
              level = doc.data().level;
            }
          });
        // console.log(singleAnswer);
        answers.push({ ...doc.data(), category, level, ref: doc.id });
      });
      dispatch({ type: SET_ANSWERS, payload: answers });
    });
};
