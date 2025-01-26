import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Filters from '../components/Filters';
import RestaurantFilter from '../components/RestaurantFilter';
import Loader from '../components/loading';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Searchpage = () => {
    const [loadingRestaurants, setLoadingRestaurants] = useState(true);

    const [filters, setFilters] = useState({
        rating: 5,
        priceRange: [0, 500],
        cuisine: [],
        location: "",
        vegNonVeg: "both",
        acNonAc: "both"
    });

    useEffect(() => {
        setTimeout(() => {
            setLoadingRestaurants(false);
        }, 2000);
    }, []);

    return (
        <div className="flex flex-col border border-black h-full w-full p-0">
            <Navbar />
            <div className="flex flex-row items-center w-full p-4">
                <Filters filters={filters} setFilters={setFilters} />
                <div className="w-full">
                    {loadingRestaurants ? (
                        <Loader />
                    ) : (
                        <RestaurantFilter filters={filters} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Searchpage;
