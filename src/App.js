import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
