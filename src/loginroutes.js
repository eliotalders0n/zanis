import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./comps/pages/landingPage";
import Profile from "./comps/pages/profile";
import ReelCard from "./comps/pages/reels";
import Header from "./comps/template/head";
import Navigation from "./comps/template/navigation";
import Story from "./comps/pages/story";
import Ministries from "./comps/pages/ministires";
import Resources from "./comps/pages/resources";
import Podcast from "./comps/pages/podcast";
import PodcastList from "./comps/pages/podcastList";

// ----------------------------------------------------------------------

export default function LoginRoutes() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/podcast" element={<Podcast />} />
        <Route exact path="/podcastlist/:ministry" element={< PodcastList/>} />
        <Route path="/ministries" element={<Ministries/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/reels" element={<ReelCard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
    </>
  );
}
