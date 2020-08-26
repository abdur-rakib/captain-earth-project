import { db } from "../../firebase/util";
import { SET_TASKS, CREATE_CURRENT_TASK } from "../types";

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
  // dispatch({ type: CREATE_CURRENT_TASK, payload: { url, body } });
  // history.push("/newsfeed");
  db.collection("answers")
    .add({
      url,
      userImage,
      body,
      userName,
      taskRef,
      createdAt: new Date().toISOString(),
    })
    .then(() => {
      history.push("/newsfeed");
    })
    .catch((err) => console.log(err));
};
