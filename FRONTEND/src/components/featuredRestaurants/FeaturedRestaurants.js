import React from "react";

import { Link } from "react-router";

import { GlobalGlobalContext } from "../../components/context";

function FeaturedRestaurants({ restaurants }) {
  const { setCurrentid, dataSetting } = GlobalGlobalContext();

  const handleClick = (id) => {
    setCurrentid(id);
    dataSetting(fetchRestaurants(id));
  };

  const fetchRestaurants = async (id) => {
    try {
      const response = await fetch(
        `http://192.168.22.92:8000/api/restaurants/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error("Failed to fetch restaurants:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {restaurants.map((restaurant, index) => {
        return (
          <Link to="/resturant">
            <div
              className=" h-[400px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-90 transition duration-300 ease-in-out"
              key={index}
              onClick={() => handleClick(restaurant.id)}
            >
              <img
                src={restaurant.restaurantImage}
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
          </Link>
        );
      })}
    </div>
  );
}

export default FeaturedRestaurants;
