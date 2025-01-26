import React, { useState, useEffect } from "react";

function DisplayRestaurantLocation({ restaurantId }) {
  const [restaurantLocation, setRestaurantLocation] = useState(null);

  // Dummy data for demonstration
  const dummyLocationData = {
    mapUrl: "https://www.google.com/maps/embed/v1/place?q=restaurant+location&key=YOUR_API_KEY", // Replace with real map URL
    shopNo: "123",
    floorTower: "2nd Floor, Tower A",
    area: "Downtown Area",
    city: "New York",
    nearbyLandmark: "Near Central Park",
  };

  useEffect(() => {
    // Simulate fetching restaurant location data (replace this with actual fetch later)
    setRestaurantLocation(dummyLocationData);
  }, [restaurantId]);

  const handleEditClick = () => {
    // Handle editing logic here (e.g., show a form to update location details)
    alert("Edit functionality to be implemented");
  };

  if (!restaurantLocation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Restaurant Location</h2>

        {/* Map Integration */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Map View</h3>
          <iframe
            src={restaurantLocation.mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Address Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Address</h3>

          <div className="mb-4">
            <strong className="text-gray-700">Shop No:</strong> {restaurantLocation.shopNo}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Floor / Tower:</strong> {restaurantLocation.floorTower}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Area / Sector / Locality:</strong> {restaurantLocation.area}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">City:</strong> {restaurantLocation.city}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Nearby Landmark:</strong> {restaurantLocation.nearbyLandmark}
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

export default DisplayRestaurantLocation;
