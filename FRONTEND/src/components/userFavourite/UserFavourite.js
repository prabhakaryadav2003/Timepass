import React from "react";

function UserFavourite({ favourites = [] }) {
  // No favourites available
  if (!favourites.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">
          No favourite restaurants available to display.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your Favourite Restaurants
        </h2>

        {/* Favourite Restaurants Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favourites.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
            >
              {/* Restaurant Image */}
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Restaurant Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600">{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Dummy data for testing
const dummyFavourites = [
  {
    name: "Pasta Palace",
    image: "https://via.placeholder.com/400",
    description: "Delicious Italian pasta dishes and more.",
  },
  {
    name: "Sushi Central",
    image: "https://via.placeholder.com/400",
    description: "Fresh sushi and Japanese delicacies.",
  },
  {
    name: "Burger Joint",
    image: "https://via.placeholder.com/400",
    description: "Juicy burgers and crispy fries.",
  },
];

// Export component with dummy data for testing
export default function App() {
  return <UserFavourite favourites={dummyFavourites} />;
}
