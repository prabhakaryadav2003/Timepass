import React, { useState, useEffect } from 'react';
import TableBookingModal from "./TableBookingModal";

const fetchRestaurants = async (setRestaurantData) => {
  try {
    const restaurant_id = localStorage.getItem("restaurant_id");
    const response = await fetch(
      `http://localhost:8000/api/restaurants/${restaurant_id}`
    );
    if (response.ok) {
      const data = await response.json();

      setRestaurantData(data);
    } else {
      console.error("Failed to fetch restaurants:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const RestaurantCard = ({ name, owner_name, description, phone, rating, email, onPhoneClick, onEmailClick, onBookNowClick }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">Owned by {owner_name}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <p>
        Rating: <span className="font-bold text-yellow-500">{rating} ⭐</span>
      </p>
      <div className="mb-4">
        <button
          onClick={() => onPhoneClick(phone)}
          className="text-blue-600 hover:underline"
        >
          {phone}
        </button>
      </div>
      <div className="mb-6">
        <button
          onClick={() => onEmailClick(email)}
          className="text-blue-600 hover:underline"
        >
          {email}
        </button>
      </div>
      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600"
          onClick={onBookNowClick}
        >
          Book now
        </button>
        <button className="px-6 py-3 bg-pink-500 text-white text-lg rounded-lg shadow hover:bg-pink-600">
          Add to fav
        </button>
      </div>
    </div>
  );
};

export default function BookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchRestaurants(setRestaurantData);
  }, []);

  const handlePhoneClick = (phone) => {
    alert(`Calling ${phone}`);
  };

  const handleEmailClick = (email) => {
    alert(`Emailing ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {restaurantData ? (
        <RestaurantCard
          name={restaurantData.name}
          owner_name={restaurantData.owner_name}
          description={restaurantData.description}
          phone={restaurantData.phone}
          rating={restaurantData.average_rating}
          email={restaurantData.email}
          onPhoneClick={handlePhoneClick}
          onEmailClick={handleEmailClick}
          onBookNowClick={() => setIsModalOpen(true)}
        />
      ) : (
        <p>Loading...</p>
      )}
      <TableBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
