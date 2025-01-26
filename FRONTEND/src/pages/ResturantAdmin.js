import React from "react";
import Navbar from "../components/NavBar";
import DisplayRestaurantInformation from "../components/DisplayRestaurantInformation";
import DisplayRestaurantLocation from "../components/DisplayRestaurantLocation";
import DisplayRestaurantOperationalDetails from "../components/DisplayRestaurantOperationalDetails";
import DisplayTableDetails from "../components/DisplayTableDetails";
import DisplayRestaurantReviews from "../components/DisplayRestaurantReviews";

const ResturantAdmin = () => {
  return (
    <div className="flex flex-col border border-black h-full w-full p-0">
      <Navbar />
      <DisplayRestaurantInformation />
      <DisplayRestaurantLocation />
      <DisplayRestaurantOperationalDetails />
      <DisplayTableDetails />
      <DisplayRestaurantReviews />
    </div>
  );
};

export default ResturantAdmin;
