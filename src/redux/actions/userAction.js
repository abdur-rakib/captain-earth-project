import {
  auth,
  googleProvider,
  facebookProvider,
  db,
} from "../../firebase/util";
import {
  SET_AUTHENTICATED,
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_USER_ANSWERS,
} from "../types";

// Sign in with Google
export const signInWithGoogle = () => (dispatch) => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      dispatch({ type: SET_AUTHENTICATED });
      db.doc(`/users/${res.user.uid}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return;
          } else {
            db.doc(`/users/${res.user.uid}`).set({
              ref: res.user.uid,
              userName: res.user.displayName,
              userImage: res.user.photoURL,
              email: res.user.email,
              userLevel: "commonar",
              score: 0,
            });
          }
        });
    })
    .catch((err) => console.log(err));
};
// Sign in with Facebook
export const signInWithFacebook = () => (dispatch) => {
  auth
    .signInWithPopup(facebookProvider)
    .then((res) => {
      dispatch({ type: SET_AUTHENTICATED });
      db.doc(`/users/${res.user.uid}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            getAuthenticatedUser(res.user.uid);
            return;
          } else {
            db.doc(`/users/${res.user.uid}`).set({
              ref: res.user.uid,
              userName: res.user.displayName,
              userImage: res.user.photoURL,
              email: res.user.email,
              userLevel: "commonar",
              score: 0,
            });
          }
        });
    })
    .catch((err) => console.log(err));
};

// logout
export const logout = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch({ type: SET_UNAUTHENTICATED });
    })
    .catch((err) => console.log(err));
};

// get authenticated user details
export const getAuthenticatedUser = (uid) => (dispatch) => {
  db.doc(`/users/${uid}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({
          type: SET_USER,
          payload: {
            ...doc.data(),
          },
        });
      }
    });
};

// get individual user answers
export const getIndividualUserAnswers = (userName) => (dispatch) => {
  db.collection("answers")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapShot) => {
      const answers = [];
      querySnapShot.forEach((doc) => {
        answers.push(doc.data());
      });
      dispatch({ type: SET_USER_ANSWERS, payload: answers });
    });
};
