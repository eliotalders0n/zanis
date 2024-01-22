import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./comps/pages/login";
import Landing from "./comps/pages/landingPage";
import Profile from "./comps/pages/profile";
import Feed from "./comps/platform/feed";
import Mypage from "./comps/platform/mypage";
import ReelCard from "./comps/pages/reels";

// ----------------------------------------------------------------------

export default function LoginRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reels" element={<ReelCard />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/feed" element={<Feed />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* <Route path="/welcome" element={<Welcome />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
