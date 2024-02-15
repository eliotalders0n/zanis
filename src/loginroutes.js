import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./comps/pages/landingPage";
import Profile from "./comps/pages/profile";
import ReelCard from "./comps/pages/reels";
import Header from "./comps/template/head";
import Navigation from "./comps/template/navigation";
import Story from "./comps/pages/story";
import Ministries from "./comps/pages/ministires";

// ----------------------------------------------------------------------

export default function LoginRoutes() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/ministries" element={<Ministries/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/reels" element={<ReelCard />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
    </>
  );
}
