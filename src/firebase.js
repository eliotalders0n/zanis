import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ8hosDbUffyNm_7uzacxuljOpK0TOmWQ",
  authDomain: "zanis-app.firebaseapp.com",
  projectId: "zanis-app",
  storageBucket: "zanis-app.appspot.com",
  messagingSenderId: "141780524287",
  appId: "1:141780524287:web:e48d44df46e72f06b1c0ca",
  measurementId: "G-5GJHFZMXV1"
};

firebase.initializeApp(firebaseConfig);
export default firebase;