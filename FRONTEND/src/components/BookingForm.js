import React, { useState } from 'react';

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [numGuests, setNumGuests] = useState(1);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setNumGuests(e.target.value);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking Form</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form>
          {/* Date Picker */}
          <div className="mb-6">
            <label htmlFor="date" className="block text-gray-700 text-lg mb-2">Select Date</label>
            <input
              type="date"
              id="date"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          {/* Number of Guests */}
          <div className="mb-6">
            <label htmlFor="guests" className="block text-gray-700 text-lg mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              min="1"
              max="10"
              value={numGuests}
              onChange={handleGuestsChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Book Table
          </button>
        </form>

        {/* Confirmation */}
        {selectedDate && numGuests && (
          <div className="mt-6 text-center text-gray-800">
            <p>Your booking for <span className="font-semibold">{numGuests} {numGuests > 1 ? 'guests' : 'guest'}</span> on <span className="font-semibold">{selectedDate}</span> is confirmed!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
