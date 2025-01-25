import React from 'react';

// BookingHistory Component
function BookingHistory({ bookings = [] }) {
  if (!bookings.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">No bookings available to display.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Booking History</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{booking.restaurantName}</h3>
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

// Dummy Data
const dummyBookings = [
  {
    id: 1,
    restaurantName: 'The Gourmet Kitchen',
    date: '2025-02-15',
    time: '7:00 PM',
    guests: 4,
    onModify: (id) => console.log('Modify booking with ID:', id),
    onCancel: (id) => console.log('Cancel booking with ID:', id),
  },
  {
    id: 2,
    restaurantName: 'Ocean Breeze',
    date: '2025-03-01',
    time: '6:00 PM',
    guests: 2,
    onModify: (id) => console.log('Modify booking with ID:', id),
    onCancel: (id) => console.log('Cancel booking with ID:', id),
  },
  {
    id: 3,
    restaurantName: 'Mountain Retreat',
    date: '2025-04-10',
    time: '8:00 PM',
    guests: 6,
    onModify: (id) => console.log('Modify booking with ID:', id),
    onCancel: (id) => console.log('Cancel booking with ID:', id),
  },
];

// Export Component with Dummy Data for Testing
export default function App() {
  return <BookingHistory bookings={dummyBookings} />;
}
