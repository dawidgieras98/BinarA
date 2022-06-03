import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./Pages/Landing/Landing";
import Game from "./Pages/Game/Game";
import Score from "./Pages/Score/Score";
import Error from "./Pages/Error/Error";


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/score" element={<Score />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
