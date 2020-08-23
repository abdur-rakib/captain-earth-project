import { db } from "../../firebase/util";
import { SET_TASKS } from "../types";

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
