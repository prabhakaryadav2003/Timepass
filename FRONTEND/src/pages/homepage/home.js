import React from "react";
import SearchBar from "../../components/SearchBar";
import Cusines from "../../components/cusines/cusines";
import FeaturedRestaurants from "../../components/featuredRestaurants/FeaturedRestaurants";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

import restaurantsData from "../../components/featuredRestaurants/data";
import cusinesData from "../../components/cusines/data";
import Loader from "../../components/loading";

import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("hora hai");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col border border-black h-full w-full p-0">
      <Navbar />
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center w-full p-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Featured Restaurants
          </h2>
          <div className="w-full ">
            <FeaturedRestaurants restaurants={restaurantsData} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
