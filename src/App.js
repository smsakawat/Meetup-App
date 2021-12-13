import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import AllMeetUps from "./pages/AllMeetUps/AllMeetUps";
import Favourites from "./pages/Favourites/Favourites";
import NewMeetUp from "./pages/NewMeetUp/NewMeetUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUps />}></Route>
        <Route path="/new-meetup" element={<NewMeetUp />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
