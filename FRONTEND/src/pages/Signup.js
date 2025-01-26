import React, { useState } from "react";
import Navbar from "../components/NavBar";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      setError("Please fill in all fields");
      return;
    }

    console.log("Signup successful, OTP sent to:", email);
    setIsOtpSent(true);
  };

  const handleOtpVerification = () => {
    if (otp === "1234") {
      console.log("OTP verified");
      setIsSignedUp(true);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-[22px] font-bold text-black text-center mb-6">
          Sign Up
        </h2>
        {isSignedUp ? (
          <div className="text-center">
            <p className="text-green-600 font-medium">
              Your account has been created successfully!
            </p>
          </div>
        ) : (
          <>
            {!isOtpSent ? (
              <form onSubmit={handleSignup}>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-[18px] font-bold text-black mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-[18px] font-bold text-black mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-[18px] font-bold text-black mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-[18px] font-bold text-black mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[18px] font-bold text-black mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="mb-4 text-red-600 text-[14px]">{error}</div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Sign Up
                </button>
              </form>
            ) : (
              <div>
                <h3 className="text-[18px] font-bold text-black mb-4">
                  Verify OTP
                </h3>
                <div className="mb-4">
                  <label
                    htmlFor="otp"
                    className="block text-[18px] font-bold text-black mb-2"
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="mb-4 text-red-600 text-[14px]">{error}</div>
                )}

                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition duration-300"
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