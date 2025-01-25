import React, { useState } from 'react';

function ReviewsFilter() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filter Reviews</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form>
          {/* Filter Selection */}
          <div className="mb-6">
            <label htmlFor="filter" className="block text-gray-700 text-lg mb-2">Sort by:</label>
            <select
              id="filter"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="">--Select Filter--</option>
              <option value="highest">Highest Rating</option>
              <option value="most-recent">Most Recent</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Apply Filter
          </button>
        </form>
      </div>

      {/* Display Selected Filter */}
      {selectedFilter && (
        <div className="mt-4 text-center text-gray-800">
          <p>Currently applying filter: <span className="font-semibold">{selectedFilter === 'highest' ? 'Highest Rating' : selectedFilter === 'most-recent' ? 'Most Recent' : 'Lowest Rating'}</span></p>
        </div>
      )}
    </div>
  );
}

export default ReviewsFilter;
