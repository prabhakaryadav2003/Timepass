import React from "react";

import Navbar from "../components/NavBar";

import ManageRestaurant from "../components/ManageRestaurant";
import RemoveInappropriateReviews from "../components/RemoveInappropriateReview";

const WebsiteAdmin = () => {
  return (
    <div className="flex flex-col border border-black h-full w-full pt-16 pb-8">
      <Navbar />
      <ManageRestaurant />
      <RemoveInappropriateReviews />
    </div>
  );
};

export default WebsiteAdmin;
