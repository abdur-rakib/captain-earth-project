import { db } from "../../firebase/util";
import { SET_TASKS, SET_ANSWERS, SET_LIKES } from "../types";
// eslint-disable-next-line
import { required_likes, completed_tasks, comp_tasks } from "../../utils/utils";
// import { changeLevel } from "./userAction";

export const getTasks = (userLevel) => (dispatch) => {
  db.collection("tasks")
    .where("user_level", "==", userLevel)
    .get()
    .then((querySnapshot) => {
      let tasks = [];
      // eslint-disable-next-line
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), ref: doc.id });
      });
      dispatch({ type: SET_TASKS, payload: tasks });
    });
};

// get all likes
export const getLikes = () => (dispatch) => {
  db.collection("likes").onSnapshot((querySnapshot) => {
    let likes = [];
    // eslint-disable-next-line
    querySnapshot.forEach((doc) => {
      likes.push({ ...doc.data() });
    });
    dispatch({ type: SET_LIKES, payload: likes });
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
  categoryId,
  levelId,
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
      categoryId,
      levelId,
      likeCount: 0,
      unlikeCount: 0,
      shareCount: 0,
      completed: false,
      createdAt: new Date().toISOString(),
      isBan: false,
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
    // .where("isBan", "==", false)
    .onSnapshot((querySnapshot) => {
      let answers = [];
      // eslint-disable-next-line
      querySnapshot.forEach((doc) => {
        answers.push({
          ...doc.data(),
          ref: doc.id,
        });
      });
      dispatch({ type: SET_ANSWERS, payload: answers });
    });
};

// Like post
export const likeAnswer = (userRef, answerOwner, answerRef, points) => (
  dispatch
) => {
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
        })
        .then(() => dispatch(taskCompletion(answerOwner, answerRef, points)));
    });
};

// Task Completion action
export const taskCompletion = (answerOwner, answerRef, points) => (
  dispatch
) => {
  // console.log("Task completion");
  db.doc(`/answers/${answerRef}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        if (
          doc.data().likeCount >= required_likes &&
          doc.data().completed === false
        ) {
          db.doc(`/answers/${answerRef}`)
            .update({
              completed: true,
            })
            .then(() => {
              db.doc(`/users/${answerOwner}`)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    let score = doc.data().score;
                    let completedTasks = doc.data().completedTasks;
                    let level = doc.data().level;
                    db.doc(`/users/${answerOwner}`)
                      .update({
                        score: score + points,
                        completedTasks: completedTasks + 1,
                      })
                      .then(() => {
                        console.log(completedTasks);
                        console.log(level);
                        // console.log(comp_tasks(level));
                        if (completedTasks === completed_tasks - 1) {
                          db.doc(`/users/${answerOwner}`).update({
                            level: level + 1,
                            completedTasks: 0,
                          });
                        }
                      });
                  }
                });
            });
        }
      }
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

export const report = (answerRef, userRef, url, body) => (dispatch) => {
  db.collection("reported")
    .where("answerRef", "==", answerRef)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        db.collection("reported")
          .add({
            userRef: userRef,
            answerRef: answerRef,
            url: url,
            body: body,
          })
          .then(() => {
            console.log("added to report");
          });
      }
    });
};
