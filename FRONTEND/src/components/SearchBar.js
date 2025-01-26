import React from "react";

function SearchBar() {
  return (
    <div className="my-6 px-4 md:px-8 mt-[6rem]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:flex-1">
          <input
            type="text"
            className="w-full py-3 px-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 "
            placeholder="Search for restaurants..."
          />
        </div>

        {/* <div className="flex gap-4">
          <select className="py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>

          <select className="py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">Cuisine</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="chinese">Chinese</option>
          </select>

          <select className="py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">Rating</option>
            <option value="4">4 stars & above</option>
            <option value="3">3 stars & above</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default SearchBar;
