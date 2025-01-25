import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/homepage/home";
import ResturantPage from "./pages/resturantPage/resturantPage";
import AddResturant from "./pages/addResturant";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { GlobalProvider } from "./components/context";
const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resturant" element={<ResturantPage />} />
            <Route path="/addresturant" element={<AddResturant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
