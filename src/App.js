import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps/AllMeetUps";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetUps />}></Route>
    </Routes>
  );
}

export default App;
