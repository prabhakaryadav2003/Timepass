import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import AddRestaurantPage from "./components/AddRestaurentPage";
import RestaurantInformation from "./components/RestaurantInformation";
import RestaurantLocationDetails from "./components/RestaurantLocationDetails";
import MenuDetails from "./components/MenuDetails"
import TableDetails from "./components/TableDetails";
import PaymentDetails from "./components/PaymentDetails";
import BookingConfirmation from "./components/BookingConfirmation";

// import Home from "./pages/homepage/Home";

const App = () => {
  return (
    <div>
      <BookingConfirmation/>
    </div>
  );
};

export default App;
