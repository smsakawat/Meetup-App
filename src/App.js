import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/Navigation/Navigation";
import AllMeetUps from "./pages/AllMeetUps/AllMeetUps";
import Favourites from "./pages/Favourites/Favourites";
import NewMeetUp from "./pages/NewMeetUp/NewMeetUp";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllMeetUps />}></Route>
        <Route path="/new-meetup" element={<NewMeetUp />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
