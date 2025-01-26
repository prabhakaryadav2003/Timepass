import React, { useState } from "react";

function ManageRestaurant() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "The Gourmet Kitchen",
      location: "New York, USA",
      cuisines: "Italian, French",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Sushi World",
      location: "Tokyo, Japan",
      cuisines: "Japanese, Sushi",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    location: "",
    cuisines: "",
    image: "",
  });

  const handleAddRestaurant = () => {
    if (newRestaurant.name && newRestaurant.location && newRestaurant.cuisines) {
      setRestaurants([
        ...restaurants,
        { id: Date.now(), ...newRestaurant },
      ]);
      setNewRestaurant({ name: "", location: "", cuisines: "", image: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const handleUpdateRestaurant = (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedLocation = prompt("Enter new location:");
    const updatedCuisines = prompt("Enter new cuisines:");

    if (updatedName && updatedLocation && updatedCuisines) {
      setRestaurants(
        restaurants.map((restaurant) =>
          restaurant.id === id
            ? {
                ...restaurant,
                name: updatedName,
                location: updatedLocation,
                cuisines: updatedCuisines,
              }
            : restaurant
        )
      );
    } else {
      alert("All fields are required for update.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Restaurants</h2>

        {/* Add Restaurant Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Restaurant</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Restaurant Name"
              value={newRestaurant.name}
              onChange={(e) =>
                setNewRestaurant({ ...newRestaurant, name: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Location"
              value={newRestaurant.location}
              onChange={(e) =>
                setNewRestaurant({ ...newRestaurant, location: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Cuisines"
              value={newRestaurant.cuisines}
              onChange={(e) =>
                setNewRestaurant({ ...newRestaurant, cuisines: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newRestaurant.image}
              onChange={(e) =>
                setNewRestaurant({ ...newRestaurant, image: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <button
            onClick={handleAddRestaurant}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add Restaurant
          </button>
        </div>

        {/* Restaurant Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Image</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Location</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Cuisines</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="border-t">
                  <td className="px-6 py-4">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-800">{restaurant.name}</td>
                  <td className="px-6 py-4 text-gray-800">{restaurant.location}</td>
                  <td className="px-6 py-4 text-gray-800">{restaurant.cuisines}</td>
                  <td className="px-6 py-4 flex justify-center space-x-4">
                    <button
                      onClick={() => handleUpdateRestaurant(restaurant.id)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteRestaurant(restaurant.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageRestaurant;
