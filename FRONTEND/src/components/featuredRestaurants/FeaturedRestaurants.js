import React from "react";

import { Link } from "react-router";

function FeaturedRestaurants({ restaurants }) {
  return (
    <Link to="/resturant">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-6">
        {restaurants.map((restaurant, index) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
            key={index}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-800">
                {restaurant.name}
              </h5>
              <p className="text-gray-600 mt-2">{restaurant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}

export default FeaturedRestaurants;
