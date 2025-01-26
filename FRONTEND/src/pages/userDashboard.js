import React from "react";

import Navbar from "../components/NavBar";
import UserProfile from "../components/UserProfile";

import UserReviews from "../components/UserReviews";
import BookingHistory from "../components/bookingHistory/BookingHistory";
import BookingData from "../components/bookingHistory/data";
import UserFavourite from "../components/userFavourite/UserFavourite";
import UserFavData from "../components/userFavourite/UserFavData";
import ManageRestaurant from "../components/ManageRestaurant";

const UserDashboard = () => {
  return (
    <div className="flex flex-col border border-black h-full w-full p-32">
      <Navbar />
      <UserProfile />
      <BookingHistory bookings={BookingData} />
      <UserFavourite favourites={UserFavData} />
      <UserReviews />
    </div>
  );
};

export default UserDashboard;
