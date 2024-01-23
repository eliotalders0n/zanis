import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// User Interface
import firebase from "./firebase";
import Header from "./comps/template/head";
import Landing from "./comps/pages/landingPage";
import ReelCard from "./comps/pages/reels";
import Profile from "./comps/pages/profile";
import { Routes } from "react-router-dom";
import Navigation from "./comps/template/navigation";
import Ministries from "./comps/pages/ministires";
import Story from "./comps/pages/story";
const App = () => {
  const [state, setstate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true when the component mounts

    const authStateChanged = (user) => {
      if (user) {
        setstate(true);
        setIsLoading(false); // Set isLoading to false when the user state changes
      } else {
        setstate(false);
        setIsLoading(false); // Set isLoading to false when the user state changes
      }
    };

    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/reels" element={<ReelCard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/story" element={<Story />} />
        </Routes>
        <Navigation />
      </Router>
    </>
  );
};

export default App;
