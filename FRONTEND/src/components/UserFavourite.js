import React from "react";

function UserFavourite({ favourites = [] }) {
  if (!favourites.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">No favourite restaurants available to display.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Favourite Restaurants</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favourites.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{restaurant.name}</h3>
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
    name: "The Gourmet Kitchen",
    description: "A fine dining experience with global cuisines.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pasta Paradise",
    description: "Delicious handmade pasta and Italian specialties.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sushi World",
    description: "Fresh sushi and authentic Japanese dishes.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Burger Haven",
    description: "Gourmet burgers with unique flavors and sides.",
    image: "https://via.placeholder.com/150",
  },
];

export default function UserFavouriteWrapper() {
  return <UserFavourite favourites={dummyFavourites} />;
}