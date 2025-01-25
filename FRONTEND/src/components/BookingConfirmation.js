import React, { useState } from 'react';

function BookingConfirmation() {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(true); // Mock booking confirmation status
  const [showNotification, setShowNotification] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [isSmsConfirmed, setIsSmsConfirmed] = useState(false);

  const bookingDetails = {
    date: '2025-02-15',
    time: '7:00 PM',
    guests: 4,
    restaurantName: 'The Gourmet Kitchen',
  };

  const handleModifyBooking = () => {
    console.log('Modify booking');
  };

  const handleCancelBooking = () => {
    console.log('Cancel booking');
    setIsBookingConfirmed(false); // Mock booking cancellation
  };

  const handleSendNotification = () => {
    setIsEmailConfirmed(true);
    setIsSmsConfirmed(true);
    setShowNotification(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 py-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6">
        {isBookingConfirmed ? (
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Booking Confirmation</h2>
            
            {/* Booking Summary */}
            <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-800 font-medium mb-2">Booking Summary</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Restaurant Name:</strong> {bookingDetails.restaurantName}</li>
                <li><strong>Date:</strong> {bookingDetails.date}</li>
                <li><strong>Time:</strong> {bookingDetails.time}</li>
                <li><strong>Guests:</strong> {bookingDetails.guests}</li>
              </ul>
            </div>

            {/* Confirmation Message */}
            <div className="mb-6">
              <p className="text-green-600 font-semibold text-xl">Your booking has been confirmed successfully!</p>
            </div>

            {/* Modify or Cancel Buttons */}
            <div className="flex justify-between space-x-4 mb-6">
              <button
                onClick={handleModifyBooking}
                className="w-full sm:w-auto bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Modify Booking
              </button>
              <button
                onClick={handleCancelBooking}
                className="w-full sm:w-auto bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Cancel Booking
              </button>
            </div>

            {/* Send Notification Button */}
            <div className="mb-6 text-center">
              <button
                onClick={handleSendNotification}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Confirmation Email/SMS
              </button>
            </div>

            {/* Show notification if sent */}
            {showNotification && (
              <div className="mt-4 bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
                <p className="text-sm text-green-600">Confirmation notifications sent successfully!</p>
                <ul className="list-inside text-sm">
                  {isEmailConfirmed && <li>Email confirmation sent!</li>}
                  {isSmsConfirmed && <li>SMS confirmation sent!</li>}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Booking Canceled</h2>
            <p className="text-lg text-red-600 text-center">Your booking has been successfully canceled.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingConfirmation;
