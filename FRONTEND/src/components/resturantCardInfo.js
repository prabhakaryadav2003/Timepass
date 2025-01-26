import React from "react";

const RestaurantCard = ({ name, owner, description, phone, rating, email, onPhoneClick, onEmailClick }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">Owned by {owner}</p>
      <p className="text-gray-700 my-2">{description}</p>
      <p className="text-gray-700">
        Rating: <span className="font-bold">{rating} ⭐</span>
      </p>
      <div className="mt-4">
        <button
          onClick={() => onPhoneClick(phone)}
          className="text-blue-600 hover:underline"
        >
          {phone}
        </button>
      </div>
      <div className="mt-2">
        <button
          onClick={() => onEmailClick(email)}
          className="text-blue-600 hover:underline"
        >
          {email}
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
