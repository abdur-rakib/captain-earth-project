import {
  auth,
  googleProvider,
  facebookProvider,
  db,
} from "../../firebase/util";
import { SET_AUTHENTICATED, SET_USER, SET_UNAUTHENTICATED } from "../types";

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
              userCat: "actsOfLove",
            });
          }
        });
      // .then(() => {
      //   db.doc(`/users/${res.user.uid}`)
      //     .get()
      //     .then((doc) => {
      //       dispatch({
      //         type: SET_USER,
      //         payload: {
      //           uid: res.user.uid,
      //           userName: res.user.displayName,
      //           userImage: res.user.photoURL,
      //           email: res.user.email,
      //           userLevel: doc.data().userLevel,
      //           userCat: doc.data().userCat,
      //         },
      //       });
      //     });
      // });
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
            return;
          } else {
            db.doc(`/users/${res.user.uid}`).set({
              ref: res.user.uid,
              userName: res.user.displayName,
              userImage: res.user.photoURL,
              email: res.user.email,
              userLevel: "commonar",
              userCat: "actsOfLove",
            });
          }
        });
      // .then(() => {
      //   db.doc(`/users/${res.user.uid}`)
      //     .get()
      //     .then((doc) => {
      //       dispatch({
      //         type: SET_USER,
      //         payload: {
      //           uid: res.user.uid,
      //           userName: res.user.displayName,
      //           userImage: res.user.photoURL,
      //           email: res.user.email,
      //           userLevel: doc.data().userLevel,
      //           userCat: doc.data().userCat,
      //         },
      //       });
      //     });
      // });
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
