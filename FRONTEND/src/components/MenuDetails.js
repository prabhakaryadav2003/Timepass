import React, { useState } from 'react';

function RestaurantLocationDetails() {
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [foodImages, setFoodImages] = useState([]);
  const [menuImages, setMenuImages] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [openDays, setOpenDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisines((prevCuisines) =>
      prevCuisines.includes(cuisine) ? prevCuisines.filter(item => item !== cuisine) : [...prevCuisines, cuisine]
    );
  };

  const handleImageChange = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === 'restaurant') setRestaurantImages(files);
    else if (type === 'food') setFoodImages(files);
    else if (type === 'menu') setMenuImages(files);
  };

  const handleDayChange = (day) => {
    setOpenDays((prevState) => ({ ...prevState, [day]: !prevState[day] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      restaurantImages,
      foodImages,
      menuImages,
      selectedCuisines,
      openTime,
      closeTime,
      openDays
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Restaurant Location & Operational Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Restaurant Images */}
          <div className="mb-4">
            <label htmlFor="restaurantImages" className="block text-gray-700 font-medium mb-2">Restaurant Images</label>
            <input
              type="file"
              id="restaurantImages"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              multiple
              onChange={(e) => handleImageChange(e, 'restaurant')}
            />
          </div>

          {/* Food Images */}
          <div className="mb-4">
            <label htmlFor="foodImages" className="block text-gray-700 font-medium mb-2">Food Images</label>
            <input
              type="file"
              id="foodImages"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              multiple
              onChange={(e) => handleImageChange(e, 'food')}
            />
          </div>

          {/* Menu Images */}
          <div className="mb-4">
            <label htmlFor="menuImages" className="block text-gray-700 font-medium mb-2">Dining Menu Images</label>
            <input
              type="file"
              id="menuImages"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              multiple
              onChange={(e) => handleImageChange(e, 'menu')}
            />
          </div>

          {/* Select Cuisines */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select up to 3 Cuisines</label>
            <div className="grid grid-cols-2 gap-4">
              {['Cuisines 1', 'Cuisines 2', 'Cuisines 3', 'Cuisines 4', 'Cuisines 5', 'Cuisines 6'].map((cuisine) => (
                <div key={cuisine} className="flex items-center">
                  <input
                    type="checkbox"
                    id={cuisine}
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={() => handleCuisineSelect(cuisine)}
                    disabled={selectedCuisines.length >= 3 && !selectedCuisines.includes(cuisine)}
                    className="mr-2"
                  />
                  <label htmlFor={cuisine} className="text-gray-700">{cuisine}</label>
                </div>
              ))}
            </div>
            <button type="button" className="text-blue-600 mt-2">Show more</button>
          </div>

          {/* Restaurant Dining Timings */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="openTime" className="block text-gray-700 font-medium mb-2">Open Time</label>
              <input
                type="time"
                id="openTime"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="closeTime" className="block text-gray-700 font-medium mb-2">Close Time</label>
              <input
                type="time"
                id="closeTime"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Open Days */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Open Days</label>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(openDays).map((day) => (
                <div key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    id={day}
                    checked={openDays[day]}
                    onChange={() => handleDayChange(day)}
                    className="mr-2"
                  />
                  <label htmlFor={day} className="text-gray-700 capitalize">{day}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantLocationDetails;
