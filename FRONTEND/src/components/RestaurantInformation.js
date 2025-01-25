import React, { useState } from "react";

function RestaurantInformation({ onSubmit }) {
  const [restaurantName, setRestaurantName] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantPhone, setRestaurantPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !restaurantName ||
      !ownerFirstName ||
      !ownerLastName ||
      !ownerPhone ||
      !restaurantEmail ||
      !restaurantPhone
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Pass valid data to the parent component
    onSubmit({
      restaurantName,
      ownerFirstName,
      ownerLastName,
      ownerPhone,
      restaurantEmail,
      restaurantPhone,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Restaurant Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="restaurantName"
              className="block text-gray-700 font-medium mb-2"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ownerFirstName"
              className="block text-gray-700 font-medium mb-2"
            >
              Owner First Name
            </label>
            <input
              type="text"
              id="ownerFirstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={ownerFirstName}
              onChange={(e) => setOwnerFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ownerLastName"
              className="block text-gray-700 font-medium mb-2"
            >
              Owner Last Name
            </label>
            <input
              type="text"
              id="ownerLastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={ownerLastName}
              onChange={(e) => setOwnerLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ownerPhone"
              className="block text-gray-700 font-medium mb-2"
            >
              Owner's Phone Number
            </label>
            <input
              type="text"
              id="ownerPhone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="restaurantEmail"
              className="block text-gray-700 font-medium mb-2"
            >
              Restaurant Email
            </label>
            <input
              type="email"
              id="restaurantEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={restaurantEmail}
              onChange={(e) => setRestaurantEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="restaurantPhone"
              className="block text-gray-700 font-medium mb-2"
            >
              Restaurant Phone Number
            </label>
            <input
              type="text"
              id="restaurantPhone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={restaurantPhone}
              onChange={(e) => setRestaurantPhone(e.target.value)}
              required
            />
          </div>

          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Information
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantInformation;
