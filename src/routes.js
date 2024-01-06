import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User Interface
import Feed from "./comps/feed";
import Profile from "./comps/profile";
import Booking from "./comps/booking";
import History from "./comps/history";

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
