import React, { useState, useEffect } from "react";

function DisplayRestaurantOperationalDetails({ restaurantId }) {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  // Dummy data for demonstration
  const dummyDetails = {
    restaurantImages: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
    ],
    foodImages: [
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop", // curry
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop", // burger
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop", // pasta
    ],
    menuImages: [
      "/resturant_images/menu1.jpg",
      "/resturant_images/menu2.jpg",
      "/resturant_images/menu3.jpg",
    ],
    menuPdf: "/docs/menu.pdf", // mock PDF
    cuisines: "Italian, French, Mediterranean",
    openingTime: "10:00 AM",
    closingTime: "11:00 PM",
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
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Restaurant Operational Details
      </h2>

      {/* Restaurant Images */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Restaurant Images
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurantDetails.restaurantImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Restaurant Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Food Images */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Food Images
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurantDetails.foodImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Food Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Menu Images / Menu PDF */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Menu Images / Menu PDF
        </h3>
        <div className="mb-4">
          <strong className="text-gray-700">Menu Images:</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurantDetails.menuImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Menu Image ${index + 1}`}
                className="w-full object-cover rounded-lg py-2"
              />
            ))}
          </div>
        </div>
        <div>
          <strong className="text-gray-700">Menu PDF:</strong>{" "}
          <a
            href={restaurantDetails.menuPdf}
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Menu PDF
          </a>
        </div>
      </div>

      {/* Cuisines */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Cuisines</h3>
        <div className="mb-4">{restaurantDetails.cuisines}</div>
      </div>

      {/* Opening & Closing Time */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Operating Hours
        </h3>
        <div className="mb-4">
          <strong className="text-gray-700">Opening Time:</strong>{" "}
          {restaurantDetails.openingTime}
        </div>
        <div className="mb-4">
          <strong className="text-gray-700">Closing Time:</strong>{" "}
          {restaurantDetails.closingTime}
        </div>
      </div>

      {/* Opening Days */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Opening Days
        </h3>
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
  );
}

export default DisplayRestaurantOperationalDetails;
