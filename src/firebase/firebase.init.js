// We should not store config on the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVOBOp-sx-WZbEvB5-GpHSJ8lnMbLGpds",
  authDomain: "simple-firebase-65f29.firebaseapp.com",
  projectId: "simple-firebase-65f29",
  storageBucket: "simple-firebase-65f29.firebasestorage.app",
  messagingSenderId: "780101576762",
  appId: "1:780101576762:web:f46a26df5d2b3725432d03",
  measurementId: "G-DCF4CLYMNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

