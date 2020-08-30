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
  userRef,
  history
) => (dispatch) => {
  db.collection("answers")
    .add({
      url,
      userImage,
      body,
      userName,
      taskRef,
      userRef,
      likeCount: 0,
      unlikeCount: 0,
      shareCount: 0,
      completed: false,
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
        answers.push({ ...doc.data(), ref: doc.id });
      });
      dispatch({ type: SET_ANSWERS, payload: answers });
    });
};

// Like post
export const likeAnswer = (userRef, answerRef) => (dispatch) => {
  db.collection("likes")
    .add({
      userRef: userRef,
      answerRef: answerRef,
    })
    .then(() => {
      db.doc(`/answers/${answerRef}`)
        .get()
        .then((doc) => {
          db.doc(`/answers/${answerRef}`).update({
            likeCount: doc.data().likeCount + 1,
          });
        });
    });
};

// Disable Like post

export const disableLikeAnswer = (userRef, answerRef) => (dispatch) => {
  db.collection("likes")
    .where("userRef", "==", userRef)
    .where("answerRef", "==", answerRef)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        db.doc(`/likes/${querySnapshot.docs[0].id}`)
          .delete()
          .then(() => {
            db.doc(`/answers/${answerRef}`)
              .get()
              .then((doc) => {
                db.doc(`/answers/${answerRef}`).update({
                  likeCount: doc.data().likeCount - 1,
                });
              });
          });
      }
    });
};

// Unlike post
export const unlikeAnswer = (userRef, answerRef) => (dispatch) => {
  db.collection("unlikes")
    .add({
      userRef: userRef,
      answerRef: answerRef,
    })
    .then(() => {
      db.doc(`/answers/${answerRef}`)
        .get()
        .then((doc) => {
          db.doc(`/answers/${answerRef}`).update({
            unlikeCount: doc.data().unlikeCount + 1,
          });
        });
    });
};

// Disable Unlike post

export const disableUnlikeAnswer = (userRef, answerRef) => (dispatch) => {
  db.collection("unlikes")
    .where("userRef", "==", userRef)
    .where("answerRef", "==", answerRef)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        db.doc(`/unlikes/${querySnapshot.docs[0].id}`)
          .delete()
          .then(() => {
            db.doc(`/answers/${answerRef}`)
              .get()
              .then((doc) => {
                db.doc(`/answers/${answerRef}`).update({
                  unlikeCount: doc.data().unlikeCount - 1,
                });
              });
          });
      }
    });
};
