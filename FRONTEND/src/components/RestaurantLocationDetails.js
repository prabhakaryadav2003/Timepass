import React, { useState } from 'react';

function RestaurantLocationDetails() {
  const [shopNo, setShopNo] = useState('');
  const [floor, setFloor] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate fields
    if (!shopNo || !floor || !area || !city || !landmark) {
      setError('Please fill in all address fields');
      return;
    }

    // Mock API call or further processing
    console.log('Restaurant Location Details Submitted');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Restaurant Location Details</h2>

        {/* Address Form */}
        <form onSubmit={handleSubmit}>
          {/* Shop No */}
          <div className="mb-4">
            <label htmlFor="shopNo" className="block text-gray-700 font-medium mb-2">Shop No</label>
            <input
              type="text"
              id="shopNo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={shopNo}
              onChange={(e) => setShopNo(e.target.value)}
              required
            />
          </div>

          {/* Floor / Tower */}
          <div className="mb-4">
            <label htmlFor="floor" className="block text-gray-700 font-medium mb-2">Floor / Tower</label>
            <input
              type="text"
              id="floor"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              required
            />
          </div>

          {/* Area / Sector / Locality */}
          <div className="mb-4">
            <label htmlFor="area" className="block text-gray-700 font-medium mb-2">Area / Sector / Locality</label>
            <input
              type="text"
              id="area"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          {/* Nearby Landmark */}
          <div className="mb-4">
            <label htmlFor="landmark" className="block text-gray-700 font-medium mb-2">Nearby Landmark</label>
            <input
              type="text"
              id="landmark"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Location Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantLocationDetails;
