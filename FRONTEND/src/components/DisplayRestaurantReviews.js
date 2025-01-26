import React, { useState, useEffect } from 'react';

function DisplayRestaurantReview({ restaurantId }) {
  const [reviews, setReviews] = useState([]);

  // Mock data for reviews, replace with actual data from the database
  const dummyReviews = [
    { id: 1, restaurantName: 'The Gourmet Kitchen', userName: 'John Doe', rating: 5, comment: 'Amazing food and great service!' },
    { id: 2, restaurantName: 'Sushi World', userName: 'Jane Smith', rating: 4, comment: 'Fresh sushi and friendly staff.' },
    { id: 3, restaurantName: 'Pizza Paradise', userName: 'Tom Brown', rating: 3, comment: 'Good pizza, but a bit too salty for my taste.' },
    { id: 4, restaurantName: 'Steak House', userName: 'Emily White', rating: 5, comment: 'Perfect steak! Best in town.' },
  ];

  useEffect(() => {
    // Simulate fetching reviews (replace this with actual fetch logic)
    setReviews(dummyReviews.filter((review) => review.restaurantName === 'The Gourmet Kitchen'));
  }, [restaurantId]);

  return (
    <div className="flex justify-center items-center bg-gray-100 pt-24">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">User Reviews</h2>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 rounded-lg"
            >
              {/* Restaurant Name */}
              <div className="flex flex-col mb-2">
                <span className="text-xl font-medium text-gray-800">{review.restaurantName}</span>
                <span className="text-sm text-gray-500">{review.userName}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-lg font-semibold">{'⭐'.repeat(review.rating)}</span>
              </div>

              {/* User Comment */}
              <div className="text-gray-600 max-w-xl">
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayRestaurantReview;
