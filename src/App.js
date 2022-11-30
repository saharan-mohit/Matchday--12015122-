import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import VideoPage from "./components/VideoPage";

const App = () => {
  return (
  
      <Router>
        <Routes>
          <Route path="" exact element={<HomePage />} />
          <Route path="/video" exact element={<VideoPage />} />
        </Routes>
      </Router>
  
  );
};

export default App;
