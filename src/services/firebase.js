/* eslint-disable no-underscore-dangle */
// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      auth.currentUser
        .getIdToken(true)
        .then((idToken) => {
          const Uid = res.user._delegate.uid;
          const name = res.user.displayName;

          sessionStorage.setItem("AM", idToken);
          sessionStorage.setItem("NM", name);
          sessionStorage.setItem("UID", Uid);

          window.location.href = "/phone";
        })
        .catch((error) => {
          console.log(error.message);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { firebase };
