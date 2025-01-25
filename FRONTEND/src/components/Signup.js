import React, { useState } from 'react';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    // Validate fields
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      setError('Please fill in all fields');
      return;
    }

    // Mock API call to send OTP
    console.log('Signup successful, OTP sent to:', email);
    setIsOtpSent(true);
  };

  const handleOtpVerification = () => {
    if (otp === '1234') { // Replace with actual OTP validation logic
      console.log('OTP verified');
      setIsSignedUp(true);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
        {isSignedUp ? (
          <div className="text-center">
            <p className="text-green-600 font-medium">Your account has been created successfully!</p>
          </div>
        ) : (
          <>
            {/* Signup Form */}
            {!isOtpSent ? (
              <form onSubmit={handleSignup}>
                {/* First Name */}
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                {/* Error Message */}
                {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Sign Up
                </button>
              </form>
            ) : (
              /* OTP Verification */
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Verify OTP</h3>
                <div className="mb-4">
                  <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">Enter OTP</label>
                  <input
                    type="text"
                    id="otp"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>

                {/* Error Message */}
                {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                  onClick={handleOtpVerification}
                >
                  Verify OTP
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Signup;