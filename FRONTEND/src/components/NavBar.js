import React, { useState } from "react";
import websiteLogo from "../assets/restaurant.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar z-50 fixed top-0 bg-white shadow-md px-6 py-3 flex justify-between items-center w-full">
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img src={websiteLogo} alt="Website Logo" className="h-10 w-10" />
          <span className="text-2xl font-semibold text-gray-800">
            Table Heaven
          </span>
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          to="/addresturant"
          className="text-gray-700 hover:text-gray-900 text-lg"
        >
          Add Restaurant
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-gray-900 text-lg transition duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg"
        >
          Signup
        </Link>
      </div>

      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-gray-800 focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4 transition-all duration-[2s] ease-out opacity-100 transform translate-y-4"
          style={{
            transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <Link
            to="/addrestaurant"
            className="text-gray-700 hover:text-gray-900 text-lg"
          >
            Add Restaurant
          </Link>
          <a
            href="/login"
            className="text-gray-700 hover:text-gray-900 text-lg"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg"
          >
            Signup
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
