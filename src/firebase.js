import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmEU6TEjJl2VwuxgFTfTekgqmIYZNgufk",
  authDomain: "zanis-pro.firebaseapp.com",
  projectId: "zanis-pro",
  storageBucket: "zanis-pro.appspot.com",
  messagingSenderId: "214538999867",
  appId: "1:214538999867:web:5e7562737c20357df6241e"
};
firebase.initializeApp(firebaseConfig);
export default firebase;