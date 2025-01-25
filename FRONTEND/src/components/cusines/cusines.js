import React from 'react';

function Cusines({ cusines }) {
  return (
    <div className="my-8 px-4 md:px-8">
      <h4 className="text-2xl font-semibold text-gray-800 mb-4">Popular Cuisines</h4>
      <div className="flex flex-wrap justify-center md:space-y-0 ">
        {cusines.map((category, index) => (
          <button
            key={index}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 w-full sm:w-auto ml-4"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cusines;
