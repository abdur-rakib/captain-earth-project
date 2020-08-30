import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

import config from "./config";

firebase.initializeApp(config);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope("email");
const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.addScope("email");

export { db, storage, auth, googleProvider, facebookProvider };
