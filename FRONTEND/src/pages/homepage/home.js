import React from "react";
import SearchBar from "../../components/SearchBar";
import FeaturedRestaurants from "../../components/featuredRestaurants/FeaturedRestaurants";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

import Loader from "../../components/loading";

import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://192.168.22.92:8000/api/restaurants/"
        ); 
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          const formattedData = data.map((restaurant) => ({
            id: restaurant.id,
            name: restaurant.name,
            isVeg: restaurant.is_veg, 
            phone: restaurant.phone,
            description: restaurant.description,
            restaurantImage: restaurant.restaurant_image_url, 
            openTime: restaurant.open_time,
            closeTime: restaurant.close_time,
          }));
          setRestaurantsData(formattedData); 
        } else {
          console.error("Failed to fetch restaurants:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-col border border-black h-full w-full p-0">
      <Navbar />
      <SearchBar />
      <div className="flex flex-col items-center w-full p-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Featured Restaurants
        </h2>
        <div className="w-full">
          {loading ? (
            <Loader />
          ) : (
            <FeaturedRestaurants restaurants={restaurantsData} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
