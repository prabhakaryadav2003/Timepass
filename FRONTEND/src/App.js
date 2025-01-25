import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import AddRestaurantPage from "./components/AddRestaurentPage";
import RestaurantInformation from "./components/RestaurantInformation";
import RestaurantLocationDetails from "./components/RestaurantLocationDetails";

// import Home from "./pages/homepage/Home";

const App = () => {
  return (
    <div>
      <RestaurantLocationDetails/>
    </div>
  );
};

export default App;
