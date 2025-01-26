import React from "react";

// BookingHistory Component
function BookingHistory({ bookings = [] }) {
  // No bookings available
  if (!bookings.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">No bookings available to display.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Booking History</h2>
        
        {/* Booking Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              {/* Restaurant and Booking Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {booking.restaurantName}
                </h3>
                <p className="text-gray-600">
                  <strong>Date:</strong> {booking.date}
                </p>
                <p className="text-gray-600">
                  <strong>Time:</strong> {booking.time}
                </p>
                <p className="text-gray-600">
                  <strong>Guests:</strong> {booking.guests}
                </p>
              </div>

              {/* Modify and Cancel Buttons */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => booking.onModify(booking.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Modify
                </button>
                <button
                  onClick={() => booking.onCancel(booking.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingHistory;
