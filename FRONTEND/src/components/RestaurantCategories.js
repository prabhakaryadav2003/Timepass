import React from 'react';

function RestaurantCategories() {
  return (
    <div className="my-8 px-4 md:px-8">
      <h4 className="text-2xl font-semibold text-gray-800 mb-4">Popular Cuisines</h4>
      <div className="flex flex-wrap justify-start space-x-4 space-y-4 md:space-y-0">
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
          Italian
        </button>
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
          Mexican
        </button>
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
          Chinese
        </button>
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
          American
        </button>
      </div>
    </div>
  );
}

export default RestaurantCategories;
