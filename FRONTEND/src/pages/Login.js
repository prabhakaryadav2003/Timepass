import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { GlobalGlobalContext } from "../components/context"; // Import the custom hook

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { isLoggedInGlobal, setIsLoggedInGlobal } = GlobalGlobalContext(); // Use the hook here

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access);
        setIsLoggedInGlobal(true); // Set the global state to true
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };


  if (isLoggedInGlobal) {
    navigate("/"); // Redirect to home if logged in
    return null; // Prevents the login form from rendering after redirect
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-[22px] font-bold text-black text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        {!isLoggedInGlobal && (

          <div className="mt-4 text-center">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
