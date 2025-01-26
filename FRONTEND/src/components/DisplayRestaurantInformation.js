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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Restaurant Information</h2>

        {/* Restaurant Info Card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Details</h3>
          
          <div className="mb-4">
            <strong>Restaurant Name:</strong> {restaurantData.restaurantName}
          </div>
          <div className="mb-4">
            <strong>Owner's First Name:</strong> {restaurantData.ownerFirstName}
          </div>
          <div className="mb-4">
            <strong>Owner's Last Name:</strong> {restaurantData.ownerLastName}
          </div>
          <div className="mb-4">
            <strong>Owner's Phone Number:</strong> {restaurantData.ownerPhoneNumber}
          </div>
          <div className="mb-4">
            <strong>Restaurant Email:</strong> {restaurantData.restaurantEmail}
          </div>
          <div className="mb-4">
            <strong>Restaurant Phone Number:</strong> {restaurantData.restaurantPhoneNumber}
          </div>
          
          <button
            onClick={handleEditClick}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInformation;
