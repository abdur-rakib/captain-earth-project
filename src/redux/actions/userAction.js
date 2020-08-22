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
        .set({
          ref: res.user.uid,
          userName: res.user.displayName,
          userImage: res.user.photoURL,
          email: res.user.email,
        })
        .then(() => {
          dispatch({
            type: SET_USER,
            payload: {
              uid: res.user.uid,
              userName: res.user.displayName,
              userImage: res.user.photoURL,
              email: res.user.email,
            },
          });
        });
    })
    .catch((err) => console.log(err));
};
// Sign in with Facebook
export const signInWithFacebook = () => (dispatch) => {
  auth
    .signInWithPopup(facebookProvider)
    .then((res) => {
      db.doc(`/users/${res.user.uid}`)
        .set({
          ref: res.user.uid,
          userName: res.user.displayName,
          userImage: res.user.photoURL,
          email: res.user.email,
        })
        .then(() => {
          dispatch({
            type: SET_USER,
            payload: {
              uid: res.user.uid,
              userName: res.user.displayName,
              userImage: res.user.photoURL,
              email: res.user.email,
            },
          });
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
