import React, { useState } from "react";

function RestaurantLocationDetails({ onSubmit }) {
  const [shopNo, setShopNo] = useState("");
  const [floor, setFloor] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const steps = 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (currentStep === 1 && (!shopNo || !floor || !area)) {
      setError("Please fill in all address fields for Step 1");
      return;
    } else if (currentStep === 2 && (!city || !landmark)) {
      setError("Please fill in all address fields for Step 2");
      return;
    }

    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
    } else {
      const data = {
        shopNo,
        floor,
        area,
        city,
        landmark,
      };
      onSubmit(data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Restaurant Location Details
        </h2>

        <div className="relative w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
            style={{ width: `${(currentStep / steps) * 100}%` }}
          ></div>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="shopNo"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="floor"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="area"
                  className="block text-gray-700 font-medium mb-2"
                >
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
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="landmark"
                  className="block text-gray-700 font-medium mb-2"
                >
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
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
              >
                {currentStep === steps ? "Submit" : "Next"}
              </button>
            </>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
          >
            {currentStep === steps ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantLocationDetails;
