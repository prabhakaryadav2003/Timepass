import React, { useState } from "react";

function RestaurantLocationDetails({ onSubmit }) {
  const [shopNo, setShopNo] = useState("");
  const [floor, setFloor] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation for all fields
    if (!shopNo || !floor || !area || !city || !landmark) {
      setError("Please fill in all address fields.");
      return;
    }

    const data = { shopNo, floor, area, city, landmark };
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 pt-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Restaurant Location Details
        </h2>

        {/* Error message */}
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="shopNo" className="block text-gray-700 font-bold mb-2">
              Shop No
            </label>
            <input
              type="text"
              id="shopNo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={shopNo}
              onChange={(e) => setShopNo(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="floor" className="block text-gray-700 font-bold mb-2">
              Floor
            </label>
            <input
              type="text"
              id="floor"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="area" className="block text-gray-700 font-bold mb-2">
              Area
            </label>
            <input
              type="text"
              id="area"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="landmark" className="block text-gray-700 font-bold mb-2">
              Landmark
            </label>
            <input
              type="text"
              id="landmark"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantLocationDetails;
