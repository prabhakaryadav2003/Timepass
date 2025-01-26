import React, { useState, useEffect } from "react";

function DisplayRestaurantOperationalDetails({ restaurantId }) {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  // Dummy data for demonstration
  const dummyDetails = {
    restaurantImages: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    foodImages: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    menuImages: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    menuPdf: "https://www.example.com/menu.pdf", // Link to PDF file
    cuisines: "Italian, French",
    openingTime: "9:00 AM",
    closingTime: "10:00 PM",
    openingDays: "Monday - Sunday",
  };

  useEffect(() => {
    // Simulate fetching restaurant operational details (replace this with actual fetch later)
    setRestaurantDetails(dummyDetails);
  }, [restaurantId]);

  const handleEditClick = () => {
    // Handle editing logic here (e.g., show a form to update details)
    alert("Edit functionality to be implemented");
  };

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Restaurant Operational Details</h2>

        {/* Restaurant Images */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurantDetails.restaurantImages.map((img, index) => (
              <img key={index} src={img} alt={`Restaurant Image ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* Food Images */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Food Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurantDetails.foodImages.map((img, index) => (
              <img key={index} src={img} alt={`Food Image ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* Menu Images / Menu PDF */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Menu Images / Menu PDF</h3>
          <div className="mb-4">
            <strong className="text-gray-700">Menu Images:</strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {restaurantDetails.menuImages.map((img, index) => (
                <img key={index} src={img} alt={`Menu Image ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
              ))}
            </div>
          </div>
          <div>
            <strong className="text-gray-700">Menu PDF:</strong> <a href={restaurantDetails.menuPdf} className="text-blue-600" target="_blank" rel="noopener noreferrer">View Menu PDF</a>
          </div>
        </div>

        {/* Cuisines */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cuisines</h3>
          <div className="mb-4">{restaurantDetails.cuisines}</div>
        </div>

        {/* Opening & Closing Time */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Operating Hours</h3>
          <div className="mb-4">
            <strong className="text-gray-700">Opening Time:</strong> {restaurantDetails.openingTime}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Closing Time:</strong> {restaurantDetails.closingTime}
          </div>
        </div>

        {/* Opening Days */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Opening Days</h3>
          <div className="mb-4">{restaurantDetails.openingDays}</div>
        </div>

        {/* Edit Button */}
        <button
          onClick={handleEditClick}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default DisplayRestaurantOperationalDetails;
