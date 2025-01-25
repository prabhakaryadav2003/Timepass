import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/homepage/Home";
import ResturantPage from "./pages/resturantPage/resturantPage";

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resturant" element={<ResturantPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
