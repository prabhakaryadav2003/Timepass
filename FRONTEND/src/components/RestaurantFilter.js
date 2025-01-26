import React from "react";
import SearchBar from "./SearchBar";

import { useState, useEffect } from "react";

// export const restaurants = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/150",
//     name: "The Gourmet Kitchen",
//     location: "New York, NY",
//     availableTables: 5,
//     rating: 4.5,
//     priceRange: [50, 150],
//     cuisine: "Italian",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/150",
//     name: "Pizza Palace",
//     location: "Chicago, IL",
//     availableTables: 2,
//     rating: 4.7,
//     priceRange: [10, 30],
//     cuisine: "Italian",
//     vegNonVeg: "veg",
//     acNonAc: "non-ac",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/150",
//     name: "Sushi Heaven",
//     location: "San Francisco, CA",
//     availableTables: 3,
//     rating: 4.8,
//     priceRange: [20, 60],
//     cuisine: "Japanese",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/150",
//     name: "Spice Street",
//     location: "Los Angeles, CA",
//     availableTables: 4,
//     rating: 4.3,
//     priceRange: [15, 40],
//     cuisine: "Indian",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 5,
//     image: "https://via.placeholder.com/150",
//     name: "The Burger Joint",
//     location: "Miami, FL",
//     availableTables: 6,
//     rating: 4.1,
//     priceRange: [10, 25],
//     cuisine: "American",
//     vegNonVeg: "non-veg",
//     acNonAc: "non-ac",
//   },
//   {
//     id: 6,
//     image: "https://via.placeholder.com/150",
//     name: "Taco Town",
//     location: "Dallas, TX",
//     availableTables: 2,
//     rating: 4.6,
//     priceRange: [8, 20],
//     cuisine: "Mexican",
//     vegNonVeg: "both",
//     acNonAc: "non-ac",
//   },
//   {
//     id: 7,
//     image: "https://via.placeholder.com/150",
//     name: "Seafood Paradise",
//     location: "Miami, FL",
//     availableTables: 3,
//     rating: 4.2,
//     priceRange: [25, 75],
//     cuisine: "Seafood",
//     vegNonVeg: "non-veg",
//     acNonAc: "ac",
//   },
//   {
//     id: 8,
//     image: "https://via.placeholder.com/150",
//     name: "Biryani House",
//     location: "Chicago, IL",
//     availableTables: 5,
//     rating: 4.4,
//     priceRange: [12, 30],
//     cuisine: "Indian",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 9,
//     image: "https://via.placeholder.com/150",
//     name: "Pasta Place",
//     location: "Boston, MA",
//     availableTables: 4,
//     rating: 4.7,
//     priceRange: [15, 40],
//     cuisine: "Italian",
//     vegNonVeg: "both",
//     acNonAc: "non-ac",
//   },
//   {
//     id: 10,
//     image: "https://via.placeholder.com/150",
//     name: "Curry Corner",
//     location: "Seattle, WA",
//     availableTables: 6,
//     rating: 4.0,
//     priceRange: [10, 35],
//     cuisine: "Indian",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 11,
//     image: "https://via.placeholder.com/150",
//     name: "Vegan Vibes",
//     location: "Portland, OR",
//     availableTables: 3,
//     rating: 4.9,
//     priceRange: [15, 40],
//     cuisine: "Vegan",
//     vegNonVeg: "veg",
//     acNonAc: "ac",
//   },
//   {
//     id: 12,
//     image: "https://via.placeholder.com/150",
//     name: "The Sushi Bar",
//     location: "San Francisco, CA",
//     availableTables: 2,
//     rating: 4.8,
//     priceRange: [25, 80],
//     cuisine: "Japanese",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 13,
//     image: "https://via.placeholder.com/150",
//     name: "The Steakhouse",
//     location: "Austin, TX",
//     availableTables: 4,
//     rating: 4.3,
//     priceRange: [40, 120],
//     cuisine: "American",
//     vegNonVeg: "non-veg",
//     acNonAc: "non-ac",
//   },
//   {
//     id: 14,
//     image: "https://via.placeholder.com/150",
//     name: "Dim Sum Delight",
//     location: "New York, NY",
//     availableTables: 5,
//     rating: 4.6,
//     priceRange: [15, 50],
//     cuisine: "Chinese",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
//   {
//     id: 15,
//     image: "https://via.placeholder.com/150",
//     name: "Pasta Heaven",
//     location: "Los Angeles, CA",
//     availableTables: 4,
//     rating: 4.2,
//     priceRange: [18, 50],
//     cuisine: "Italian",
//     vegNonVeg: "both",
//     acNonAc: "ac",
//   },
// ];

const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant.restaurant_image_url);
  return (
    <div className="relative flex bg-white shadow-lg rounded-lg overflow-hidden mb-6 hover:shadow-2xl transition duration-300">
      <div className="w-1/3">
        <img
          src={restaurant.restaurantImage}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Heart icon positioned at top-right */}
        <div className="absolute top-4 right-4">
          <button className="text-red-500 hover:text-red-600 focus:outline-none">
            ❤️
          </button>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800">
          {restaurant.name}
        </h3>
        <p className="text-lg text-gray-600">{restaurant.location}</p>
        <div className="mt-2">
          <span className="text-lg text-gray-600">
            Available Tables:{" "}
            <span className="font-semibold text-green-600">
              {restaurant.availableTables}
            </span>
          </span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-lg text-gray-600">Rating: </span>
          <div className="flex items-center ml-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < restaurant.rating
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15l-3.09 1.635.59-3.433L4 8.992l3.41-.49L10 2l1.59 4.502 3.41.49-2.5 4.21.59 3.433L10 15z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RestaurantFilter = ({ filters }) => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://192.168.22.92:8000/api/restaurants/"
        ); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          // Assuming 'data' is an array of restaurant objects
          // console.log(data);
          const formattedData = data.map((restaurant) => ({
            id: restaurant.id,
            name: restaurant.name,
            isVeg: restaurant.is_veg, // Assuming you want to map 'is_veg' to 'isVeg'
            phone: restaurant.phone,
            description: restaurant.description,
            restaurantImage: restaurant.restaurant_image_url, // Assuming 'restaurant_image_url' is the image URL
            openTime: restaurant.open_time,
            closeTime: restaurant.close_time,
          }));
          setRestaurantsData(formattedData); // Set the formatted data
        } else {
          console.error("Failed to fetch restaurants:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="ml-[30rem] w-[70%] overflow-y-auto">
      <SearchBar />
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Restaurant Listings
      </h2>
      {restaurantsData.length > 0 ? (
        restaurantsData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      ) : (
        <p>No restaurants found with the selected filters.</p>
      )}
    </div>
  );
};

export default RestaurantFilter;
