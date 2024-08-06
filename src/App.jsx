import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Marekting from "./Components/Marekting";
import Dev from "./Components/Dev";
import Profile from "./Components/Profile";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}>
            <Route path="/services/marketing" element={<Marekting />} />
            <Route path="/services/development" element={<Dev />} />
          </Route>
          <Route path="profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
