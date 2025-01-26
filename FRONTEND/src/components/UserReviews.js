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
    <div className="flex justify-center items-center bg-gray-100 pt-24">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-[22px] font-bold text-black mb-6 text-center">User Reviews</h2>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex justify-between items-start p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Hotel Name */}
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-black mb-1">{review.hotelName}</span>
                <p className="text-gray-700 text-[14px]">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserReviews;
