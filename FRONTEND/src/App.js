import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/homepage/home'

const App = () => {
  return (
    <div className="parent_container border border-black ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;