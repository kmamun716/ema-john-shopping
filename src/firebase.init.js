// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaQCeqrUBiuN30Ru1Ll0IqOp9TMKZ-E28",
  authDomain: "ema-jhon-simple-90b9e.firebaseapp.com",
  databaseURL: "https://ema-jhon-simple-90b9e.firebaseio.com",
  projectId: "ema-jhon-simple-90b9e",
  storageBucket: "ema-jhon-simple-90b9e.appspot.com",
  messagingSenderId: "242840618660",
  appId: "1:242840618660:web:351f4150adad841abc4831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;