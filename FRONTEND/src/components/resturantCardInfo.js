import React from "react";
import { GlobalGlobalContext } from "../components/context";

const RestaurantCard = ({ name, owner, description, phone, rating, email }) => {
  const { isModelOpen, setIsModelOpen } = GlobalGlobalContext();

  return (
    <div className="w-[500px] mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
      <p className="text-gray-700 text-lg mb-3">
        <span className="font-medium text-gray-900">Owner:</span> {owner}
      </p>
      <p className="text-gray-600 text-lg mb-5">{description}</p>
      <p className="text-gray-700 text-lg mb-3">
        <span className="font-medium text-gray-900">Phone:</span> {phone}
      </p>
      <p className="text-gray-700 text-lg mb-5">
        <span className="font-medium text-gray-900">Avg Rating:</span> ⭐{" "}
        {rating}/5
      </p>
      <p className="text-gray-700 text-lg mb-5">
        <span className="font-medium text-gray-900">Email:</span> {email}
      </p>
      <button
        className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow hover:bg-blue-600"
        onClick={() => setIsModelOpen(true)}
      >
        Book now
      </button>
      <button className="px-6 py-3 bg-pink-500 text-white text-lg rounded-lg shadow hover:bg-blue-600 ml-4">
        Add to fav
      </button>
    </div>
  );
};

export default RestaurantCard;
