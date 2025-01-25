import React, { useState } from 'react';

function TableAvailability() {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Table Availability</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form>
          {/* Time Slot Selection */}
          <div className="mb-6">
            <label htmlFor="timeSlot" className="block text-gray-700 text-lg mb-2">Select Time</label>
            <select
              id="timeSlot"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={selectedTime}
              onChange={handleTimeChange}
            >
              <option value="">--Select Time--</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Check Availability
          </button>
        </form>
      </div>

      {/* Display selected time */}
      {selectedTime && (
        <div className="mt-4 text-center text-gray-800">
          <p>You have selected <span className="font-semibold">{selectedTime}</span> for your reservation.</p>
        </div>
      )}
    </div>
  );
}

export default TableAvailability;
