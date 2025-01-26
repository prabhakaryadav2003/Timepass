import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/homepage/Home";
import ResturantPage from "./pages/resturantPage/resturantPage";
import AddResturant from "./pages/addResturant";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/userDashboard";
import WebsiteAdmin from "./pages/WebsiteAdmin";
import ResturantAdmin from "./pages/ResturantAdmin";
import { GlobalProvider } from "./components/context";
import Searchpage from "./pages/Searchpage";
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
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/resturantUser" element={<WebsiteAdmin />} />
            <Route path="/ResturantAdmin" element={<ResturantAdmin />} />
            <Route path="/Searchpage" element={<Searchpage />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
