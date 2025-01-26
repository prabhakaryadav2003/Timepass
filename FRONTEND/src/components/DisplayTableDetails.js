import React, { useState, useEffect } from "react";

function DisplayTableDetails({ restaurantId }) {
  const [bookedTables, setBookedTables] = useState(null);

  // Dummy data for demonstration
  const dummyBookingData = {
    "2-seats": [
      { id: 1, customerName: "John Doe", bookingTime: "2025-01-26 18:00" },
      { id: 2, customerName: "Jane Smith", bookingTime: "2025-01-26 19:00" },
    ],
    "4-seats": [
      { id: 3, customerName: "Tom Brown", bookingTime: "2025-01-26 20:00" },
    ],
    "6-seats": [],
  };

  useEffect(() => {
    // Simulate fetching booking data (replace this with actual fetch later)
    setBookedTables(dummyBookingData);
  }, [restaurantId]);

  const handleCancelBooking = (tableType, bookingId) => {
    // Handle cancel booking logic here (e.g., remove from the database)
    alert(`Booking for table type ${tableType} with ID ${bookingId} has been canceled.`);
    setBookedTables((prevData) => {
      const updatedData = { ...prevData };
      updatedData[tableType] = updatedData[tableType].filter(
        (booking) => booking.id !== bookingId
      );
      return updatedData;
    });
  };

  if (!bookedTables) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Booked Tables</h2>

        {/* 2-Seat Tables */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">2-Seat Tables</h3>
          <div className="mb-4">
            <strong>Booked:</strong> {bookedTables["2-seats"].length} / 10
          </div>
          <div className="mb-4">
            <strong>Available:</strong> {10 - bookedTables["2-seats"].length}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Bookings:</h4>
          <ul>
            {bookedTables["2-seats"].map((booking) => (
              <li key={booking.id} className="mb-2">
                <strong>{booking.customerName}</strong> - {booking.bookingTime}
                <button
                  onClick={() => handleCancelBooking("2-seats", booking.id)}
                  className="ml-4 text-red-600"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 4-Seat Tables */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">4-Seat Tables</h3>
          <div className="mb-4">
            <strong>Booked:</strong> {bookedTables["4-seats"].length} / 5
          </div>
          <div className="mb-4">
            <strong>Available:</strong> {5 - bookedTables["4-seats"].length}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Bookings:</h4>
          <ul>
            {bookedTables["4-seats"].map((booking) => (
              <li key={booking.id} className="mb-2">
                <strong>{booking.customerName}</strong> - {booking.bookingTime}
                <button
                  onClick={() => handleCancelBooking("4-seats", booking.id)}
                  className="ml-4 text-red-600"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 6-Seat Tables */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">6-Seat Tables</h3>
          <div className="mb-4">
            <strong>Booked:</strong> {bookedTables["6-seats"].length} / 3
          </div>
          <div className="mb-4">
            <strong>Available:</strong> {3 - bookedTables["6-seats"].length}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Bookings:</h4>
          <ul>
            {bookedTables["6-seats"].map((booking) => (
              <li key={booking.id} className="mb-2">
                <strong>{booking.customerName}</strong> - {booking.bookingTime}
                <button
                  onClick={() => handleCancelBooking("6-seats", booking.id)}
                  className="ml-4 text-red-600"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DisplayTableDetails;
