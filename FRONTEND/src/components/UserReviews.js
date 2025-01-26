import React from 'react';

function UserReviews() {
  // Mock data for reviews
  const reviews = [
    { id: 1, hotelName: 'The Grand Hotel', comment: 'Amazing experience! The service was exceptional.' },
    { id: 2, hotelName: 'Cozy Stay Inn', comment: 'Very comfortable and affordable. Highly recommended.' },
    { id: 3, hotelName: 'Luxury Palace', comment: 'The ambiance and food were fantastic.' },
    { id: 4, hotelName: 'Beachside Retreat', comment: 'Beautiful location and great hospitality.' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">User Reviews</h2>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 rounded-lg"
            >
              {/* Hotel Name */}
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-800">{review.hotelName}</span>
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

export default UserReviews;
