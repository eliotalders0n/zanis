import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User Interface
import Landing from "./comps/pages/landingPage";
import ReelCard from "./comps/pages/reels";
import Header from "./comps/template/head";
import Navigation from "./comps/template/navigation";
import GoogleSignInButton from "./comps/template/googleSignIn";
import Story from "./comps/pages/story";
import Ministries from "./comps/pages/ministires";

function Routers(props) {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/ministries" element={<Ministries/>} />
          <Route path="/reels" element={<ReelCard />} />
          <Route path="/profile" element={<GoogleSignInButton />} />
          <Route path="/story/:id" element={<Story />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default Routers;
