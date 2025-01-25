import React, { useState } from 'react';

function TableDetails() {
  const [twoSeatQuantity, setTwoSeatQuantity] = useState(0);
  const [fourSeatQuantity, setFourSeatQuantity] = useState(0);
  const [sixSeatQuantity, setSixSeatQuantity] = useState(0);
  const [customSeatQuantity, setCustomSeatQuantity] = useState(0);
  const [customSeatSets, setCustomSeatSets] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate that at least one table quantity is provided
    if (twoSeatQuantity === 0 && fourSeatQuantity === 0 && sixSeatQuantity === 0 && customSeatQuantity === 0) {
      setError('Please provide quantities for at least one type of table.');
      return;
    }

    // Validate custom seat quantity and sets
    if (customSeatSets > 0 && customSeatQuantity === 0) {
      setError('Please enter the quantity for customizable tables.');
      return;
    }

    // Mock API call or processing
    console.log({
      twoSeatQuantity,
      fourSeatQuantity,
      sixSeatQuantity,
      customSeatQuantity,
      customSeatSets
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Table Details</h2>
        <form onSubmit={handleSubmit}>
          {/* 2 Seat Tables */}
          <div className="mb-4">
            <label htmlFor="twoSeatQuantity" className="block text-gray-700 font-medium mb-2">2 Seat Tables Quantity</label>
            <input
              type="number"
              id="twoSeatQuantity"
              value={twoSeatQuantity}
              onChange={(e) => setTwoSeatQuantity(Number(e.target.value))}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* 4 Seat Tables */}
          <div className="mb-4">
            <label htmlFor="fourSeatQuantity" className="block text-gray-700 font-medium mb-2">4 Seat Tables Quantity</label>
            <input
              type="number"
              id="fourSeatQuantity"
              value={fourSeatQuantity}
              onChange={(e) => setFourSeatQuantity(Number(e.target.value))}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* 6 Seat Tables */}
          <div className="mb-4">
            <label htmlFor="sixSeatQuantity" className="block text-gray-700 font-medium mb-2">6 Seat Tables Quantity</label>
            <input
              type="number"
              id="sixSeatQuantity"
              value={sixSeatQuantity}
              onChange={(e) => setSixSeatQuantity(Number(e.target.value))}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Customizable Seat Tables */}
          <div className="mb-4">
            <label htmlFor="customSeatQuantity" className="block text-gray-700 font-medium mb-2">Customizable Seat Tables Quantity</label>
            <input
              type="number"
              id="customSeatQuantity"
              value={customSeatQuantity}
              onChange={(e) => setCustomSeatQuantity(Number(e.target.value))}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Customizable Seat Sets */}
          {customSeatQuantity > 0 && (
            <div className="mb-4">
              <label htmlFor="customSeatSets" className="block text-gray-700 font-medium mb-2">Customizable Seat Sets</label>
              <input
                type="number"
                id="customSeatSets"
                value={customSeatSets}
                onChange={(e) => setCustomSeatSets(Number(e.target.value))}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          )}

          {/* Error Message */}
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Table Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default TableDetails;
