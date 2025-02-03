import React from "react";
import SearchBar from "./SearchBar";

import { useState, useEffect } from "react";
import { GlobalGlobalContext } from "../components/context";

const RestaurantFilter = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { searchInput } = GlobalGlobalContext();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/restaurants/"
        );
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map((restaurant) => ({
            id: restaurant.id,
            name: restaurant.name || "", // Ensure name is not null
            isVeg: restaurant.is_veg,
            phone: restaurant.phone,
            description: restaurant.description || "", // Ensure description is not null
            restaurantImage: restaurant.restaurant_image_url,
            openTime: restaurant.open_time,
            closeTime: restaurant.close_time,
          }));
          setRestaurantsData(formattedData);
          setFilteredData(formattedData);
        } else {
          console.error("Failed to fetch restaurants:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const filteredRestaurants = restaurantsData.filter((restaurant) => {
      const name = restaurant.name?.toLowerCase() || ""; // Default to empty string if null
      const description = restaurant.description?.toLowerCase() || ""; // Default to empty string if null
      const search = searchInput?.toLowerCase() || ""; // Default to empty string if null
      return name.includes(search) || description.includes(search);
    });
    setFilteredData(filteredRestaurants);
  }, [searchInput, restaurantsData]);

  return (
    <div className="ml-[30%] w-[70%] overflow-y-auto">
      <SearchBar />
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Restaurant Listings
      </h2>
      {filteredData.length > 0 ? (
        filteredData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex items-center bg-white rounded-lg shadow-md p-4 mb-6 hover:shadow-lg transition-transform duration-300 transform hover:scale-95 w-full"
          >
            <div className="w-1/3 h-full">
              <img
                src={restaurant.restaurantImage}
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            <div className="w-2/3 pl-4">
              <h5 className="text-xl font-semibold text-gray-800 truncate hover:text-blue-600 transition-colors duration-300">
                {restaurant.name}
              </h5>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                {restaurant.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-semibold">Open:</span>{" "}
                {restaurant.openTime} - {restaurant.closeTime}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-semibold">Phone:</span> {restaurant.phone}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-sm">
          No restaurants found with the selected filters.
        </p>
      )}
    </div>
  );
};

export default RestaurantFilter;
