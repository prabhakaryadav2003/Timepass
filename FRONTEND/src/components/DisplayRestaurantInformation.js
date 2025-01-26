import React, { useState, useEffect } from "react";

function RestaurantInformation({ restaurantId }) {
  const [restaurantData, setRestaurantData] = useState(null);

  // Dummy data for demonstration
  const dummyData = {
    restaurantName: "The Gourmet Kitchen",
    ownerFirstName: "John",
    ownerLastName: "Doe",
    ownerPhoneNumber: "(123) 456-7890",
    restaurantEmail: "contact@gourmetkitchen.com",
    restaurantPhoneNumber: "(987) 654-3210",
  };

  useEffect(() => {
    // Simulate fetching data (replace this with actual fetch later)
    setRestaurantData(dummyData);
  }, [restaurantId]);

  const handleEditClick = () => {
    // Handle editing logic here (e.g., show a form to update details)
    alert("Edit functionality to be implemented");
  };

  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Restaurant Information</h2>

        {/* Restaurant Info Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Restaurant Details</h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <strong className="text-gray-700">Restaurant Name:</strong>
              <span>{restaurantData.restaurantName}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-700">Owner's First Name:</strong>
              <span>{restaurantData.ownerFirstName}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-700">Owner's Last Name:</strong>
              <span>{restaurantData.ownerLastName}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-700">Owner's Phone Number:</strong>
              <span>{restaurantData.ownerPhoneNumber}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-700">Restaurant Email:</strong>
              <span>{restaurantData.restaurantEmail}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-700">Restaurant Phone Number:</strong>
              <span>{restaurantData.restaurantPhoneNumber}</span>
            </div>
          </div>

          <button
            onClick={handleEditClick}
            className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInformation;
