import React from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="my-6 px-4 md:px-8 mt-[6rem]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:flex-1">
          <input
            type="text"
            id="searchInput"
            className="w-full py-3 px-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search for restaurants..."
          />
        </div>

        <Link
          to="/searchpage"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
