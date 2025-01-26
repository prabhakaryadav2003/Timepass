import React from "react";

const Filters = ({ filters, setFilters }) => {
    const handleRatingChange = (star) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            rating: star,
        }));
    };

    const handlePriceRangeChange = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: [prevFilters.priceRange[0], e.target.value],
        }));
    };

    const handleCuisineChange = (e) => {
        const value = e.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            cuisine: prevFilters.cuisine.includes(value)
                ? prevFilters.cuisine.filter((item) => item !== value)
                : [...prevFilters.cuisine, value],
        }));
    };

    const handleLocationChange = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            location: e.target.value,
        }));
    };

    const handleVegNonVegChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            vegNonVeg: value,
        }));
    };

    const handleAcNonAcChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            acNonAc: value,
        }));
    };

    return (
        <div className="fixed top-[3rem] h-full w-1/4 bg-white shadow-xl p-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Filters</h2>

            <div className="mb-6">
                <label className="block text-lg text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            className={`${star <= filters.rating ? "text-yellow-500" : "text-gray-300"
                                }`}
                            onClick={() => handleRatingChange(star)}
                        >
                            ★
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-lg text-gray-700 mb-2">Price Range</label>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className="w-full"
                />
                <div className="flex justify-between text-gray-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-lg text-gray-700 mb-2">Cuisine</label>
                <div className="flex flex-wrap gap-2">
                    {["Italian", "Chinese", "Indian", "Mexican", "Thai"].map((type) => (
                        <label key={type} className="flex items-center">
                            <input
                                type="checkbox"
                                value={type}
                                checked={filters.cuisine.includes(type)}
                                onChange={handleCuisineChange}
                                className="mr-2"
                            />
                            {type}
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-lg text-gray-700 mb-2">Location</label>
                <input
                    type="text"
                    placeholder="Search Location..."
                    value={filters.location}
                    onChange={handleLocationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                />
            </div>

            <div className="mb-6">
                <label className="block text-lg text-gray-700 mb-2">Veg / Non-Veg</label>
                <div className="flex space-x-4">
                    <button
                        className={`${filters.vegNonVeg === "veg" ? "bg-green-500 text-white" : "bg-gray-100"
                            } px-4 py-2 rounded-lg`}
                        onClick={() => handleVegNonVegChange("veg")}
                    >
                        Veg
                    </button>
                    <button
                        className={`${filters.vegNonVeg === "non-veg" ? "bg-red-500 text-white" : "bg-gray-100"
                            } px-4 py-2 rounded-lg`}
                        onClick={() => handleVegNonVegChange("non-veg")}
                    >
                        Non-Veg
                    </button>
                    <button
                        className={`${filters.vegNonVeg === "both" ? "bg-blue-500 text-white" : "bg-gray-100"
                            } px-4 py-2 rounded-lg`}
                        onClick={() => handleVegNonVegChange("both")}
                    >
                        Both
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-lg text-gray-700 mb-2">AC / Non-AC</label>
                <div className="flex space-x-4">
                    <button
                        className={`${filters.acNonAc === "ac" ? "bg-blue-600 text-white" : "bg-gray-100"
                            } px-4 py-2 rounded-lg`}
                        onClick={() => handleAcNonAcChange("ac")}
                    >
                        AC
                    </button>
                    <button
                        className={`${filters.acNonAc === "non-ac" ? "bg-gray-600 text-white" : "bg-gray-100"
                            } px-4 py-2 rounded-lg`}
                        onClick={() => handleAcNonAcChange("non-ac")}
                    >
                        Non-AC
                    </button>
                    <button
                        className={`${filters.acNonAc === "both" ? "bg-blue-600 text-white" : "bg-gray-100"
                            } px-4 py-2 rounded-lg`}
                        onClick={() => handleAcNonAcChange("both")}
                    >
                        Both
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
