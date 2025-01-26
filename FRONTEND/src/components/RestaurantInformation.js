import React, { useState } from "react";

function RestaurantInformation({ onSubmit }) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !phone) {
      setError("Please fill in all fields");
      return;
    }

    const data = {
      name,
      phone,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://192.168.22.92:8000/api/restaurants/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        onSubmit(responseData);
      } else {
        setError("Failed to submit the form. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 pt-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Restaurant Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label

              htmlFor="restaurantName"
              className="block text-gray-700 mb-2 font-bold"

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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
            >
              Restaurant Email
            </label>
            <input
              type="email"
              id="restaurantEmail"

              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label

              htmlFor="restaurantPhone"
              className="block text-gray-700 font-bold mb-2"

            >
              Restaurant Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
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
