import React from "react";

const RestaurantCard = ({ name, owner, description, phone, rating }) => {
  return (
    <div className="max-w-sm mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
      <p className="text-gray-700 text-lg mb-3">
        <span className="font-medium text-gray-900">Owner:</span> {owner}
      </p>
      <p className="text-gray-600 text-lg mb-5">{description}</p>
      <p className="text-gray-700 text-lg mb-3">
        <span className="font-medium text-gray-900">Phone:</span> {phone}
      </p>
      <p className="text-gray-700 text-lg mb-5">
        <span className="font-medium text-gray-900">Avg Rating:</span> ⭐ {rating}/5
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow hover:bg-blue-600">
        View More
      </button>
    </div>
  );
};

export default RestaurantCard;
